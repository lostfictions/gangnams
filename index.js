/*eslint semi: ["error", "never"], strict: 0*/
'use strict' //needed if running in node without transcode

const pluralize = require('pluralize')

const randomInArray = (arr) => arr[Math.floor(Math.random() * arr.length)]
const uniq = (arr) => arr.filter((value, i, self) => self.indexOf(value) === i)

const maybe = (word, weight) => Math.random() < weight ? word : ''

const upper = (str) => str[0].toUpperCase() + str.slice(1)
const upperAll = (str) => str.trim().split(' ').map(upper).join(' ').split('-').map(upper).join('-')


const makeWeightedGetter = (weights) => {
  const totalWeight = weights.reduce((p, c) => p + c[1], 0)

  let lastWeight = 0
  for(let i=0; i<weights.length; i++) {
    const w = weights[i]
    w[1] = w[1] / totalWeight + lastWeight
    lastWeight = w[1]
  }

  //Set the final weight to exactly one
  weights[weights.length-1][1] = 1

  return () => {
    const rr = Math.random()
    for(let i=0; i<weights.length; i++) {
      const w = weights[i]
      if(rr < w[1]) {
        return w[0]
      }
    }
    throw new Error('We goofed!')
  }
}

let englishTowns = require('./corpora/data/geography/english_towns_cities')
englishTowns = englishTowns.towns.concat(englishTowns.cities)

const usa = require('./corpora/data/geography/us_cities')

const customCorpora = {
  religionDescriptors: [
    "Anabaptist",
    "Anglican",
    "Baptist",
    "Calvinist",
    "Lutheran",
    "Methodist",
    "Moravian",
    "Nonconformist",
    "Pentecostal",
    "Presbyterian",
    "Quaker",
    "Shaker",
    "Russian Orthodox",
    "Jewish"
  ],
  religionNouns: [
    "Anabaptist",
    "Anglican",
    "Baptist",
    "Calvinist",
    "Lutheran",
    "Methodist",
    "Moravian",
    "Nonconformist",
    "Pentecostal",
    "Presbyterian",
    "Quaker",
    "Shaker",
    "Jew"
  ]
}

const corpora = {
  // adv: require('./corpora/data/words/adverbs').adverbs,
  adjectives: require('./corpora/data/words/adjs').adjs,
  colors: require('./corpora/data/colors/web_colors').colors
    .map(c => c.color.split(/(?=[A-Z])/).join(' ')) //transform from CamelCase to spaced
    .filter(c => c.split(' ').length < 3), //colour names shorter than three words
  englishTowns: englishTowns,
  metals: require('./corpora/data/materials/metals').metals,
  pastVerbs: require('./corpora/data/words/verbs').verbs.map(v => v.past),
  religionDescriptors: customCorpora.religionDescriptors,
  seas: require('./corpora/data/geography/oceans').seas.map(s => s.name).filter(s => s.split(' ').length < 3),
  stations: require('./corpora/data/geography/london_underground_stations').stations.map(s => s.name),
  usCities: usa.cities.map(c => c.city),
  usStates: uniq(usa.cities.map(c => c.state)),

  animals: require('./corpora/data/animals/common').animals,
  appliances: require('./corpora/data/technology/appliances').appliances,
  flowers: require('./corpora/data/plants/flowers').flowers,
  monsters: require('./corpora/data/mythology/monsters').names,
  nouns: require('./corpora/data/words/nouns').nouns,
  objects: require('./corpora/data/objects/objects').objects.filter(o => o.split(' ').length < 3),
  occupations: require('./corpora/data/humans/occupations').occupations.filter(o => o.split(' ').length < 3),
  religionNouns: customCorpora.religionNouns,
  rooms: require('./corpora/data/architecture/rooms').rooms,
  vegetables: require('./corpora/data/foods/vegetables').vegetables
}

for(const c in corpora) { //eslint-disable-line guard-for-in
  // console.log(c + ' ' + corpora[c].length)
  corpora[c] = corpora[c].map(upperAll)
}

const getArticle = makeWeightedGetter(
  [
    ['The', 1],
    ['Los', 0.07],
    ['Les', 0.03]
  ]
)


const getDescriptor = makeWeightedGetter(
  [
    [corpora.adjectives, 1.3],
    [corpora.colors, 0.8],
    [corpora.englishTowns, 0.6],
    [corpora.metals, 0.2],
    [corpora.pastVerbs, 0.7],
    [corpora.religionDescriptors, 0.5],
    [corpora.seas, 0.6],
    [corpora.stations, 0.7],
    [corpora.usCities, 0.9],
    [corpora.usStates, 0.9]
  ]
)

const getName = makeWeightedGetter(
  [
    [corpora.animals, 1],
    [corpora.appliances, 0.1],
    [corpora.flowers, 0.2],
    [corpora.monsters, 1.1],
    [corpora.nouns, 0.7],
    [corpora.objects, 0.6],
    [corpora.occupations, 1.2],
    [corpora.religionNouns, 0.2],
    [corpora.rooms, 0.1],
    [corpora.vegetables, 0.3]
  ]
)

const getPlaceType = makeWeightedGetter(
  [
    ['Street', 1.3],
    ['Lane', 0.7],
    ['Alley', 1],
    ['Drive', 0.6],
    ['City', 0.5]
  ]
)

const getGangType = makeWeightedGetter(
  [
    ['Gang', 1.2],
    ['Club', 0.5],
    ['Society', 0.7],
    ['Mafia', 0.4],
    ['Boys', 1.4],
    ['Girls', 0.3],
    ['Lads', 0.5],
    ['Lords', 0.8],
    ['Ladies', 0.2],
    ['Lasses', 0.2]
  ]
)

const gangName = () => {
  const descriptor = maybe(randomInArray(getDescriptor()), 0.8)

  let name = maybe(
    randomInArray(getName()),
    descriptor.length > 0 ? 0.9 : 1
  )

  const placeType = maybe(
     maybe(
       randomInArray([randomInArray(getDescriptor()), randomInArray(getName())]) + ' ',
       descriptor.length > 0 ? 0.16 : 0.98
     ) + getPlaceType(),
     descriptor.length > 0 ? 0.3 : 0.64
  )

  const gangType = maybe(
    getGangType(),
    name.length > 0 ? 0.7 : 0.85
  )

  if(gangType.length === 0 && name.length > 0) {
    name = pluralize(name)
  }

  const article = maybe(
    getArticle(),
    descriptor.length > 0 && name.length > 0 ? 0.9 : 0.96
  )

  return [article, descriptor + ' ' + placeType, name + ' ' + gangType]
}

if(typeof window !== 'undefined') {
  window.gangName = gangName
}
else {
  console.log(gangName().join(' '))
}

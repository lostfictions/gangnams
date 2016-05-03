/*eslint semi: ["error", "never"]*/
'use strict'

const pluralize = require('pluralize')

const r = (arr) => arr[Math.floor(Math.random() * arr.length)]
const uniq = (arr) => arr.filter((value, i, self) => self.indexOf(value) === i)

const upper = (str) => str[0].toUpperCase() + str.slice(1)
const upperAll = (str) => str.split(' ').map(upper).join(' ').split('-').map(upper).join('-')

const weighted = (weights) => {
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
  religionNouns: customCorpora.religionNouns,
  rooms: require('./corpora/data/architecture/rooms').rooms,
  vegetables: require('./corpora/data/foods/vegetables').vegetables
}

const article = weighted(
  [
    ['The', 1],
    ['Los', 0.1],
    ['', 0.3]
  ]
)


const descriptor = weighted(
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

const name = weighted(
  [
    [corpora.animals, 1],
    [corpora.appliances, 0.1],
    [corpora.flowers, 0.2],
    [corpora.monsters, 1],
    [corpora.nouns, 0.7],
    [corpora.objects, 0.7],
    [corpora.religionNouns, 0.2],
    [corpora.rooms, 0.1],
    [corpora.vegetables, 0.3]
  ]
)

const gangName = () => [article(), upperAll(r(descriptor())), upperAll(pluralize(r(name())))]

if(typeof window !== 'undefined') {
  window.gangName = gangName
}
else {
  console.log(gangName().join(' '))
}

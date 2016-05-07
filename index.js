/*eslint semi: ["error", "never"], strict: 0*/
'use strict' //needed if running in node without transcode

const pluralize = require('pluralize')
const domready = require('domready')
const please = require('pleasejs')

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
    ['Los', 0.03],
    ['Les', 0.005]
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
    ['Mafia', 0.3],
    ['Boys', 1.4],
    ['Girls', 0.3],
    ['Lads', 0.5],
    ['Lords', 0.6],
    ['Ladies', 0.2],
    ['Lasses', 0.2],
    ['Kids', 0.7],
    ['Tribe', 0.7]
  ]
)

const gangName = () => {
  const descriptor = maybe(randomInArray(getDescriptor()), 0.8)

  let name = maybe(
    randomInArray(getName()),
    descriptor.length > 0 ? 0.9 : 1
  )

  const placeTypeBeforeDescriptor = Math.random() > 0.97
  let placeTypeExtraDescriptorChance = 0
  if(placeTypeBeforeDescriptor) {
    placeTypeExtraDescriptorChance = 1
  }
  else if(descriptor.length > 0) {
    placeTypeExtraDescriptorChance = 0.03
  }
  else {
    placeTypeExtraDescriptorChance = 0.98
  }

  const placeType = maybe(
     maybe(
       randomInArray([randomInArray(getDescriptor()), randomInArray(getName())]) + ' ',
       placeTypeExtraDescriptorChance
     ) + getPlaceType(),
     descriptor.length > 0 ? 0.18 : 0.64
  )

  const gangType = maybe(
    getGangType(),
    name.length > 0 ? 0.65 : 0.89
  )

  if(gangType.length === 0 && name.length > 0) {
    name = pluralize(name)
  }

  const article = maybe(
    getArticle(),
    descriptor.length > 0 && name.length > 0 ? 0.9 : 0.96
  )

  const finalName = [
    article,
    placeTypeBeforeDescriptor ? placeType + ' ' + descriptor : descriptor + ' ' + placeType,
    name + ' ' + gangType
  ]

  return finalName.map(n => n.trim())
}

if(typeof window === 'undefined') {
  console.log(gangName().join(' '))
}
else {
  domready(function() {
    //Create stylesheet for changing colour
    const s = document.createElement("style")
    document.head.appendChild(s)
    const gradientStyles = s.sheet
    gradientStyles.insertRule('dummy { }', 0)

    //Undo history
    const history = []

    //Elements for text replacement
    const xs = document.querySelector('.victory .xs')
    const sm = document.querySelector('.victory .sm')
    const lg = document.querySelector('.victory .lg')

    let name = []
    let col = ''

    function newName() {
      history.push({ name: name, col: col })

      name = gangName()

      //Use the bigger font size if words are missing
      if(name[2].length === 0) {
        name[2] = name[1]
        name[1] = name[0]
        name[0] = ''
      }
      if(name[1].length === 0) {
        name[1] = name[0]
        name[0] = ''
      }

      //If the descriptor is long, make sure it wraps
      sm.style.whiteSpace =
        (name[1].split(' ').length > 2 && name[1].length > 14) || (name[1].length > 24)
          ? 'normal'
          : 'nowrap'

      //Set text
      xs.innerHTML = name[0]
      sm.innerHTML = name[1]
      lg.innerHTML = name[2]

      //Set new colour
      col = please.make_color({saturation: 1})
      setColor(col)
    }

    function undo() {
      if(history.length <= 1) {
        return
      }

      const h = history.pop()
      name = h.name

      sm.style.whiteSpace =
        (name[1].split(' ').length > 2 && name[1].length > 14) || (name[1].length > 24)
          ? 'normal'
          : 'nowrap'

      xs.innerHTML = name[0]
      sm.innerHTML = name[1]
      lg.innerHTML = name[2]

      col = h.col
      setColor(col)
    }

    function setColor(color) {
      gradientStyles.deleteRule(0)
      gradientStyles.insertRule('.fancy.cssgradients .victory::before { background: linear-gradient(' + color + ' 40%,  #F9F9F7 80%); }', 0)
    }

    const b = document.querySelector('#another')
    b.onclick = function(e) { e.preventDefault(); newName() }

    const u = document.querySelector('#undo')
    u.onclick = function(e) { e.preventDefault(); undo() }

    const p = document.querySelector('#plain')
    const htmlEl = document.querySelector('html').classList
    p.onclick = function(e) { e.preventDefault(); htmlEl.toggle('fancy') }

    newName()
  })
}

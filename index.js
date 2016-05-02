/*eslint semi: ["error", "never"]*/
'use strict'

const pluralize = require('pluralize')

const r = (arr) => arr[Math.floor(Math.random() * (arr.length + 1))]

const upper = (str) => str[0].toUpperCase() + str.slice(1)
const upperAll = (str) => str.split(' ').map(upper).join(' ').split('-').map(upper).join('-')

const weighted = (weights) => {
  const totalWeight = weights.reduce((p, c) => p + c[1], 0)

  let lastWeight = 0
  for(const w of weights) {
    w[1] = w[1] / totalWeight + lastWeight
    lastWeight = w[1]
  }

  //Set the final weight to exactly one
  weights[weights.length-1][1] = 1

  return () => {
    const rr = Math.random()
    for(const w of weights) {
      if(rr < w[1]) {
        return w[0]
      }
    }
    throw new Error('We goofed!')
  }
}


// const adv = require('./corpora/data/words/adverbs').adverbs
const adjectives = require('./corpora/data/words/adjs').adjs
const metals = require('./corpora/data/materials/metals').metals

const animals = require('./corpora/data/animals/common').animals
const appliances = require('./corpora/data/technology/appliances').appliances
const colors = require('./corpora/data/colors/web_colors').colors.map(c => c.color.split(/(?=[A-Z])/).join(' '))
const flowers = require('./corpora/data/plants/flowers').flowers
const monsters = require('./corpora/data/mythology/monsters').names
const rooms = require('./corpora/data/architecture/rooms').rooms
const vegetables = require('./corpora/data/foods/vegetables').vegetables


const descriptor = weighted(
  [
    [adjectives, 1],
    [colors, 0.8],
    [metals, 0.2]
  ]
)

const name = weighted(
  [
    [animals, 1.3],
    [appliances, 0.1],
    [flowers, 0.2],
    [monsters, 1.5],
    [rooms, 0.1],
    [vegetables, 0.25]
  ]
)

const gangName = () => ['The', upperAll(r(descriptor())), upperAll(pluralize(r(name())))]

if(typeof window !== 'undefined') {
  window.gangName = gangName
}
else {
  console.log(gangName().join(' '))
}

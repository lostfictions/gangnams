const pluralize = require('pluralize')

const r = (arr) => arr[Math.floor(Math.random() * (arr.length + 1))]

const upper = (str) => str[0].toUpperCase() + str.slice(1)
const upperAll = (str) => str.split(' ').map(upper).join(' ').split('-').map(upper).join('-')

const weighted = (weights) => {
  let totalWeight = weights.reduce((p, c) => p + c[1], 0)
  
  let cumulative = 0 
  for(const w of weights) {
    w[1] = w[1] / totalWeight + cumulative
    cumulative += w[1] 
  }
  
  return () => {
    const rr = Math.random()
    for(const w of weights) {
      if(rr < w[1]) {
        return w[0]
      }
    }
  }
} 


// const adv = require('./corpora/data/words/adverbs').adverbs
const adj = require('./corpora/data/words/adjs').adjs
const animal = require('./corpora/data/animals/common').animals
const veg = require('./corpora/data/foods/vegetables').vegetables
const metal = require('./corpora/data/materials/metals').metals

const descriptor = weighted(
  [
    [adj, 1],
    [metal, 0.3]
  ]
)

const name = weighted(
  [
    [animal, 1],
    [veg, 0.6]
  ]
)

const gangName = () => ['The', upperAll(r(descriptor())), upperAll(pluralize(r(name())))] 

window.gangName = gangName;

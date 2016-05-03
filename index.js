/*eslint semi: ["error", "never"]*/

const pluralize = require('pluralize')

const r = (arr) => arr[Math.floor(Math.random() * arr.length)]

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


const corpora = {
  // adv: require('./corpora/data/words/adverbs').adverbs,
  adjectives: require('./corpora/data/words/adjs').adjs,
  metals: require('./corpora/data/materials/metals').metals,

  animals: require('./corpora/data/animals/common').animals,
  appliances: require('./corpora/data/technology/appliances').appliances,
  colors: require('./corpora/data/colors/web_colors').colors.map(c => c.color.split(/(?=[A-Z])/).join(' ')),
  flowers: require('./corpora/data/plants/flowers').flowers,
  monsters: require('./corpora/data/mythology/monsters').names,
  rooms: require('./corpora/data/architecture/rooms').rooms,
  vegetables: require('./corpora/data/foods/vegetables').vegetables
}


const descriptor = weighted(
  [
    [corpora.adjectives, 1],
    [corpora.colors, 0.8],
    [corpora.metals, 0.2]
  ]
)

const name = weighted(
  [
    [corpora.animals, 1.3],
    [corpora.appliances, 0.1],
    [corpora.flowers, 0.2],
    [corpora.monsters, 1.5],
    [corpora.rooms, 0.1],
    [corpora.vegetables, 0.25]
  ]
)

const gangName = () => ['The', upperAll(r(descriptor())), upperAll(pluralize(r(name())))]

if(typeof window !== 'undefined') {
  window.gangName = gangName
}
else {
  console.log(gangName().join(' '))
}

const test = require('tape')
const reducer = require('../reducer')

test('testing blueegg', function (t) {
  t.ok(true)
  t.end()
})

test('search test deals', function (t) {
  const state = {
    products: [
      {name: 'Doctor Strange', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/xfWac8MTYDxujaxgPVcRD9yZaul.jpg', deal: true},
      {name: 'Iron Man', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/s2IG9qXfhJYxIttKyroYFBsHwzQ.jpg', deal: true},
      {name: 'Gladiator', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg', deal: false}
    ],
    searched: [],
    backdrops: 'https://image.tmdb.org/t/p/original/tFI8VLMgSTTU38i8TIsklfqS9Nl.jpg'
  }
  const expected = {
    products: [
      {name: 'Doctor Strange', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/xfWac8MTYDxujaxgPVcRD9yZaul.jpg', deal: true},
      {name: 'Iron Man', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/s2IG9qXfhJYxIttKyroYFBsHwzQ.jpg', deal: true},
      {name: 'Gladiator', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg', deal: false}
    ],
    searched: [{name: 'Doctor Strange', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/xfWac8MTYDxujaxgPVcRD9yZaul.jpg', deal: true}],
    backdrops: 'https://image.tmdb.org/t/p/original/tFI8VLMgSTTU38i8TIsklfqS9Nl.jpg'
  }
  const actual = reducer(state, {type: 'SEARCH_FOR_PRODUCTS', payload: 'docTOR'})
  t.deepEquals(actual, expected, 'worked')
  t.end()
})

test('search test case', function (t) {
  const state = {
    products: [
      {name: 'Doctor Strange', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/xfWac8MTYDxujaxgPVcRD9yZaul.jpg', deal: true},
      {name: 'Iron Man', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/s2IG9qXfhJYxIttKyroYFBsHwzQ.jpg', deal: true},
      {name: 'Gladiator', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg', deal: false}
    ],
    searched: [],
    backdrops: 'https://image.tmdb.org/t/p/original/tFI8VLMgSTTU38i8TIsklfqS9Nl.jpg'
  }
  const expected = {
    products: [
      {name: 'Doctor Strange', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/xfWac8MTYDxujaxgPVcRD9yZaul.jpg', deal: true},
      {name: 'Iron Man', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/s2IG9qXfhJYxIttKyroYFBsHwzQ.jpg', deal: true},
      {name: 'Gladiator', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg', deal: false}
    ],
    searched: [{name: 'Gladiator', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg', deal: false}],
    backdrops: 'https://image.tmdb.org/t/p/original/tFI8VLMgSTTU38i8TIsklfqS9Nl.jpg'
  }
  const actual = reducer(state, {type: 'SEARCH_FOR_PRODUCTS', payload: 'GlAd'})
  t.deepEquals(actual, expected, 'worked')
  t.end()
})

test('add product to cart', function (t) {
  const state = {
    products: [
      {name: 'Doctor Strange', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/xfWac8MTYDxujaxgPVcRD9yZaul.jpg', price: 25, deal: true},
      {name: 'Iron Man', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/s2IG9qXfhJYxIttKyroYFBsHwzQ.jpg', price: 20, deal: true},
      {name: 'Gladiator', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg', price: 25, deal: false}
    ],
    searched: [],
    cart: [],
    backdrops: 'https://image.tmdb.org/t/p/original/tFI8VLMgSTTU38i8TIsklfqS9Nl.jpg'
  }
  const expected = {
    products: [
      {name: 'Doctor Strange', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/xfWac8MTYDxujaxgPVcRD9yZaul.jpg', price: 25, deal: true},
      {name: 'Iron Man', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/s2IG9qXfhJYxIttKyroYFBsHwzQ.jpg', price: 20, deal: true},
      {name: 'Gladiator', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg', price: 25, deal: false}
    ],
    searched: [],
    cart: [{name: 'Gladiator', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg', price: 25, deal: false}],
    backdrops: 'https://image.tmdb.org/t/p/original/tFI8VLMgSTTU38i8TIsklfqS9Nl.jpg'
  }
  const actual = reducer(state, {type: 'ADD_PRODUCT_TO_CART', payload: 'Gladiator'})
  t.deepEquals(actual, expected, 'worked')
  t.end()
})

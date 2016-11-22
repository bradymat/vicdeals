const { createStore } = require('redux')
const { update } = require('yo-yo')

const Home = require('./templates')
const Cart = require('./templates/cart')
const Searched = require('./templates/searched')
const reducer = require('./reducer')

const initState = {
  products: [
    {name: 'Doctor Strange', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/xfWac8MTYDxujaxgPVcRD9yZaul.jpg', price: 25, deal: true},
    {name: 'Iron Man', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/s2IG9qXfhJYxIttKyroYFBsHwzQ.jpg', price: 20, deal: true},
    {name: 'Gladiator', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg', price: 25, deal: false}
  ],
  searched: [],
  cart: [],
  backdrops: 'https://image.tmdb.org/t/p/original/tFI8VLMgSTTU38i8TIsklfqS9Nl.jpg'
}
const { dispatch, subscribe, getState } = createStore(reducer, initState)

const goHome = () => {
  // console.log('homeView')
  const state = getState()
  const newView = Home(state, dispatch)
  update(initView, newView)
}

const goCart = () => {
  const state = getState()
  const newView = Cart(state, dispatch)
  update(initView, newView)
}

const showSearched = () => {
  // console.log('searchedView')
  const state = getState()
  if(state.searched.length > 0){
    const newView = Searched(state, dispatch)
    update(initView, newView)
  }
}

const main = document.querySelector('main')
const initView = main.appendChild(Home(initState, dispatch))

subscribe(goHome)
subscribe(showSearched)

module.exports = {
  goHome,
  goCart
}

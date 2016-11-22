const { createStore } = require('redux')
const { update } = require('yo-yo')

const Home = require('./templates')
const Searched = require('./templates/searched')
const reducer = require('./reducer')

const initState = {
  products: [
    {name: 'Doctor Strange', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/xfWac8MTYDxujaxgPVcRD9yZaul.jpg', deal: true},
    {name: 'Iron Man', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/s2IG9qXfhJYxIttKyroYFBsHwzQ.jpg', deal: true},
    {name: 'Gladiator', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg', deal: false}
  ],
  searched: [],
  cart: [],
  backdrops: 'https://image.tmdb.org/t/p/original/tFI8VLMgSTTU38i8TIsklfqS9Nl.jpg'
}
const { dispatch, subscribe, getState } = createStore(reducer, initState)

const updateView = () => {
  console.log('homeView')
  const state = getState()
  const newView = Home(state, dispatch)
  update(initView, newView)
}

const showSearched = () => {
  console.log('searchedView')
  const state = getState()
  if(state.searched.length > 0){
    const newView = Searched(state, dispatch)
    update(initView, newView)
  }
}

const main = document.querySelector('main')
const initView = main.appendChild(Home(initState, dispatch))

subscribe(updateView)
subscribe(showSearched)

module.exports = {
  showSearched
}

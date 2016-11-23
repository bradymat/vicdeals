const { createStore } = require('redux')
const html = require('yo-yo')
const { update } = require('yo-yo')

const Home = require('./templates')
const Cart = require('./templates/cart')
const Searched = require('./templates/searched')
const reducer = require('./reducer')

const sheetRouter = require('sheet-router')

const initState = {
  route: '/',
  products: [
    {name: 'Doctor Strange', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/xfWac8MTYDxujaxgPVcRD9yZaul.jpg', price: 25, stock: 13, deal: false},
    {name: 'Iron Man', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/s2IG9qXfhJYxIttKyroYFBsHwzQ.jpg', price: 20, stock: 7, deal: true},
    {name: 'Gladiator', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg', price: 25, stock: 10, deal: true},
    {name: 'Westworld', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/luGF2ODxunHvDXWPRW9PjywIvuD.jpg', price: 25, stock: 13, deal: true},
    {name: 'Fantastic Beasts and Where to Find Them', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/9HE9xiNMEFJnCzndlkWD7oPfAOx.jpg', price: 25, stock: 10, deal: false}
  ],
  searched: [],
  cart: [],
  backdrops: 'https://image.tmdb.org/t/p/original/tFI8VLMgSTTU38i8TIsklfqS9Nl.jpg'
}
const { dispatch, subscribe, getState } = createStore(reducer, initState)

const goCart = () => {
  const state = getState()
  const newView = Cart(state, dispatch)
  update(initView, newView)
}

const showSearched = () => {
  // console.log('render searched products')
  const state = getState()
  if (state.searched.length != 0) {
    const newView = Searched(state, dispatch)
    update(initView, newView)
  }
}

const router = sheetRouter({ default: '/404' }, [
  ['/', (params) => Home(getState(), dispatch)],
  ['/cart', (params) => Cart(getState(), dispatch)],
  ['/404', (params) => html`<div>Oh no, path not found!</div>`]
])

const view = router(getState().route)
const link = () => {
  const newView = router(getState().route)
  update(initView, newView)
}

const main = document.querySelector('main')
const initView = main.appendChild(view)

subscribe(link)
subscribe(showSearched)

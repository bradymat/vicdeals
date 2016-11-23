const { createStore } = require('redux')
const html = require('yo-yo')
const { update } = require('yo-yo')

const Home = require('./templates')
const Cart = require('./templates/cart')
const Searched = require('./templates/searched')
const Product = require('./templates/productDetails')
const reducer = require('./reducer')

const sheetRouter = require('sheet-router')

const initState = {
  route: '/',
  products: [
    {id: 1, name: 'Iron Man', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/s2IG9qXfhJYxIttKyroYFBsHwzQ.jpg', price: 20, stock: 7, deal: true},
    {id: 2, name: 'Doctor Strange', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/xfWac8MTYDxujaxgPVcRD9yZaul.jpg', price: 25, stock: 13, deal: true},
    {id: 3, name: 'Gladiator', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg', price: 15, stock: 10, deal: false},
    {id: 4, name: 'Westworld', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/luGF2ODxunHvDXWPRW9PjywIvuD.jpg', price: 20, stock: 13, deal: true},
    {id: 5, name: 'Fantastic Beasts', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/9HE9xiNMEFJnCzndlkWD7oPfAOx.jpg', price: 25, stock: 10, deal: false},
    {id: 6, name: 'Hanna', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/2Jr4Rl4Hjiahgh09bjeH8tFhgKp.jpg', price: 20, stock: 10, deal: true},
    {id: 7, name: 'Arival', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4Iu5f2nv7huqvuYkmZvSPOtbFjs.jpg', price: 25, stock: 13, deal: false},
    {id: 8, name: 'Jack Reacher', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/IfB9hy4JH1eH6HEfIgIGORXi5h.jpg', price: 20, stock: 7, deal: false},
    {id: 9, name: 'Snowden', poster: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/mWOotrG1MMKP9iCy2uPepbu27jk.jpg', price: 15, stock: 10, deal: true},
    {id: 10, name: 'Daredevil', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/itrCovJkuH7I8SJ98jxrInnwm2y.jpg', price: 20, stock: 13, deal: false},
    {id: 11, name: 'Mad Max: Fury Road', poster: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/kqjL17yufvn9OVLyXYpvtyrFfak.jpg', price: 25, stock: 10, deal: false},
    {id: 12, name: 'Star Wars: The Force Awakens', poster: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/weUSwMdQIa3NaXVzwUoIIcAi85d.jpg', price: 20, stock: 10, deal: false}

  ],
  searched: [],
  cart: [],
  backdrops: [
    'https://image.tmdb.org/t/p/original/hP7Lxr8V2k2PIZY30QnBYCR9I4q.jpg'
  ]
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
  ['/:id', (params) => Product(getState(), dispatch)],
  ['/404', (params) => html`<div>Oh no, path not found!</div>`]
])

const link = () => {
  const newView = router(getState().route)
  update(initView, newView)
}

const main = document.querySelector('main')
const initView = main.appendChild(router(getState().route))

subscribe(link)
subscribe(showSearched)

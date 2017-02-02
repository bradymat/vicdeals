const { createStore } = require('redux')
const html = require('yo-yo')
const { update } = require('yo-yo')

const Home = require('./templates')
const Cart = require('./templates/cart')
const Searched = require('./templates/searched')
const Product = require('./templates/productDetails')
const reducer = require('./reducer')

const sheetRouter = require('sheet-router')

const { dispatch, subscribe, getState } = createStore(reducer, require('./initialState'))

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

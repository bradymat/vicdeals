const { createStore } = require('redux')
const { update } = require('yo-yo')

const template = require('./templates')
const reducer = require('./reducer')

const initState = {
  hey: 'test'
}
const { dispatch, subscribe, getState } = createStore(reducer, initState)

const updateView = () => {
  const newView = template(getState(), dispatch)
  update(initView, newView)
}

const main = document.querySelector('main')
const initView = main.appendChild(template(initState, dispatch))

subscribe(updateView)

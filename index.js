const { createStore } = require('redux')
const { update } = require('yo-yo')

const template = require('./templates')
const reducer = require('./reducer')

const initState = {
  products: [
    {name: 'Doctor Strange', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/xfWac8MTYDxujaxgPVcRD9yZaul.jpg', deal: true},
    {name: 'Iron Man', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/s2IG9qXfhJYxIttKyroYFBsHwzQ.jpg', deal: true}
  ],
  searched: [],
  backdrops: 'https://image.tmdb.org/t/p/original/tFI8VLMgSTTU38i8TIsklfqS9Nl.jpg'
}
const { dispatch, subscribe, getState } = createStore(reducer, initState)

const updateView = () => {
  const newView = template(getState(), dispatch)
  update(initView, newView)
}

const main = document.querySelector('main')
const initView = main.appendChild(template(initState, dispatch))

subscribe(updateView)

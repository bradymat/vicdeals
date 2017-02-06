import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import Router from 'sheet-router'

import Home from './components'
import AddDeal from './components/addDeal'
import Deal from './components/dealDetails'
import reducer from './reducer'

const { dispatch, subscribe, getState } = createStore(reducer, require('./initialState'))
require('./getDeals')(getState(), dispatch)

const route = Router({ default: '/404' }, [
  ['/', (params) => Home],
  ['/addDeal', (params) => AddDeal],
  ['/:id', (params) => Deal]
])

subscribe(() => {
  const Component = route(getState().route)
  render(<Component state={getState()} dispatch={dispatch} />, document.querySelector('main'))
})

dispatch({type: 'INIT'})

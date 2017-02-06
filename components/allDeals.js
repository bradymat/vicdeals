import React from 'react'

import Header from './header'
import Footer from './footer'

module.exports = ({state, dispatch}) => {
  const { deals } = state
  return (
  <div>
    <Header state={state} dispatch={dispatch}/>
    <div>
      {deals.map((deal, i) =>
        <div  key={i} className='deal col-lg-3 col-xs-12' onClick={() => {
          dispatch({type: 'GO_PAGE', payload: `/${deal.id}`})
        }}>
          <h4>{deal.name}</h4>
          <img src={deal.poster}/>
          <div><p>{deal.deal}</p></div>
        </div>
      )}
    </div>
    </div>
    <Footer/>
  </div>
  )
}

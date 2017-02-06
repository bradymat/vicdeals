import React from 'react'

import Header from './header'
import Footer from './footer'

module.exports = ({state, dispatch}) => {
  const { backdrops, deals } = state
  const featureddeals = deals.filter((deal) => deal.featured)
  return (
  <div>
    <Header state={state} dispatch={dispatch}/>
    <div id='banner'>
      {backdrops.map((backdrop, i) => {
          return (
            <img key={i} src={backdrop}/>
          )
        })
      }
    </div>
    <div id='dailyDeals'>
      <div id='dealTitle'>
        <h3>Featured Deals</h3>
      </div>
      <div id='featuredDeals'>
        {featureddeals.map((deal, i) =>
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

import React from 'react'


import Header from './header'
import Footer from './footer'

module.exports = ({state, dispatch}) => {
  const filtered = state.deals.filter((selectedDeal) => {
    return selectedDeal.id == state.route.substr(1)
  })
  const selectedDeal = filtered[0]
  const { name, poster, link, details } = selectedDeal
  return (
  <div>
    <Header state={state} dispatch={dispatch}/>
    <div className='details'>
    <div className='pic'>
    <h1>{name}</h1>
    <img src={poster} />
    </div>
    <div className='deats'>
      <p>{details}</p>
      <div><a href={link} target='_blank'><button className='buttonLink'>Go to Site</button></a></div>
    </div>
    </div>
    <Footer/>
  </div>
  )
}

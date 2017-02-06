import React from 'react'

import Header from './header'
import Footer from './footer'

module.exports = ({state, dispatch}) => {
  const { server } = state
  return (
    <div>
      <Header state={state} dispatch={dispatch}/>
      <form  className='form' method='POST' action={server}>
        <p>Name</p>
        <input type='text' name='name'/>
        <p>Image</p>
        <input type='text' name='poster'/>
        <p>Deal</p>
        <input type='text' name='deal'/>
        <p>Details</p>
        <input type='text' name='details'/>
        <p>Link</p>
        <input type='text' name='link'/>
        <p>Featured</p>
        <input type='text' name='featured'/>
        <button className='buttonLink' type='submit'>Add Deal</button>
      </form>
    </div>
  )
}

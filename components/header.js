import React from 'react'

module.exports = ({state, dispatch}) => {
  const { cart } = state
  return (
    <div id='header'>
      <div id='innerHeader'>
        <div onClick={() => dispatch({type: 'GO_PAGE', payload: '/'})} id='logo'>
          <h1>Vic Deals</h1>
        </div>


      </div>
    </div>
  )
}
// <div id='block'></div>
// <div id='searchAndCart'>
//   <input onClick={(e) => e.target.value = ''} onKeyUp={(e) => {
//     dispatch({type: 'SEARCH_FOR_PRODUCTS', payload: e.target.value})
//   }} placeholder='  Search deals'/>
//   <button onClick={() => dispatch({type: 'GO_PAGE', payload: '/addDeal'})}>Add Deal</button>
// </div>

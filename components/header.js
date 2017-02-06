const html = require('yo-yo')

module.exports = (state, dispatch) => {
  const { cart } = state
  return html`
  <div id='header'>
    <div id='innerHeader'>
      <div onclick=${() => dispatch({type: 'GO_PAGE', payload: '/'})} id='logo'>
        <h1>Vic Deals</h1>
      </div>
      <div id='block'></div>
      <div id='searchAndCart'>
        <input onclick=${(e) => e.target.value = ''} onkeyup=${(e) => {
          dispatch({type: 'SEARCH_FOR_PRODUCTS', payload: e.target.value})
        }} placeholder='  Search deals'/>
        <button onclick=${() => dispatch({type: 'GO_PAGE', payload: '/addDeal'})}>Add Deal</button>
      </div>
    </div>
  </div>
  `
}

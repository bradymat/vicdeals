const html = require('yo-yo')

const links = require('../')

module.exports = (state, dispatch) => {
  const { searched } = state
  return html`
  <div id='header'>
    <div id='innerHeader'>
      <div id='logo'  >
        <img onclick=${() => {links.goHome()}} src='https://pmcdeadline2.files.wordpress.com/2016/07/logo-tv-logo.png'/>
      </div>
      <div id='logoBg'></div>
      <div id='block'></div>
      <div id='searchAndCart'>
        <input onkeyup=${(e) => {
          dispatch({type:'SEARCH_FOR_PRODUCTS', payload: e.target.value})
        } } placeholder='Search products'/>
        <button onclick=${() => {links.goCart()}} }>Cart</button>
      </div>
    </div>
  </div>
  `
}

const html = require('yo-yo')

module.exports = (state, dispatch) => {
  return html`
  <div id='header'>
    <div id='innerHeader'>
      <div id='logo'>
        <img src='https://pmcdeadline2.files.wordpress.com/2016/07/logo-tv-logo.png'/>
      </div>
      <div id='logoBg'></div>
      <div id='block'></div>
      <div id='searchAndCart'>
        <input onkeyup=${(e) => console.log(e.target.value) } placeholder='Search products'/>
        <button onclick=${() => console.log('hey') }>Cart</button>
      </div>
    </div>
  </div>
  `
}

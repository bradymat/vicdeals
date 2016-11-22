const html = require('yo-yo')

const header = require('./header')
const footer = require('./footer')

module.exports = (state, dispatch) => {
  const { searched } = state
  return html`
  <div>
    ${header(state, dispatch)}
    <div id='searched'>
    ${searched.map((product) => html`
      <div class='product col-lg-4 col-xs-12' onclick=${() => {
        console.log('product details')
      }}>
        <h4>${product.name}</h4>
        <img src=${product.poster} />
        <p>$30</p>
      </div>
    `)}
    </div>
    ${footer()}
  </div>
  `
}

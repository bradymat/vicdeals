const html = require('yo-yo')

const header = require('./header')
const footer = require('./footer')

module.exports = (state, dispatch) => {
  const { searched } = state
  return html`
  <div>
    ${header(dispatch)}
    <div id='searched'>
    ${searched.map((product) => html`
      <div class='product col-lg-3 col-xs-12' onclick=${() => {
        dispatch({type: 'ADD_PRODUCT_TO_CART', payload: product.name})
      }}>
        <h4>${product.name}</h4>
        <img src=${product.poster} />
        ${checkIfDeal(product)}
      </div>
    `)}
    </div>
    ${footer()}
  </div>
  `
  function checkIfDeal (product){
    return product.deal ? html`<div><p>$${0.8*product.price}</p><p class='bargain'>$${product.price}</p></div>` : html`<p>$${product.price}</p>`
  }
}

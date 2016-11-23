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
      <div class='product col-lg-3'>
        <h4>${product.name}</h4>
        <img onclick=${() => {
          dispatch({type: 'GO_PAGE', payload: `/${product.id}`})
        }} src=${product.poster} />
        ${checkIfDeal(product)}
        <button onclick=${() => {
          dispatch({type: 'ADD_PRODUCT_TO_CART', payload: product.name})
        }}>Add to cart</button>
      </div>
    `)}
    </div>
    ${footer()}
  </div>
  `
  function checkIfDeal (product) {
    return product.deal ? html`<div><br><p>$${0.8 * product.price} from </p><p class='bargain'>$${product.price}</p></div>` : html`<div><br><p>$${product.price}</p></div>`
  }
}

const html = require('yo-yo')

const header = require('./header')
const footer = require('./footer')

module.exports = (state, dispatch) => {
  const { cart } = state
  return html`
  <div>
    ${header(dispatch)}
    <div id='cart'>
    <table>
    ${cart.map((product) => html`
      <tr>
        <td><img src=${product.poster} /></td>
        <td><h4>${product.name}</h4></td>
        <td>${checkIfDeal(product)}</td>
        <td><p>${product.quantity}</p></td>
        <button onclick=${() => dispatch({type: 'ADD_PRODUCT_TO_CART', payload: product.name})}>Add</button>
        <button onclick=${() => dispatch({type: 'REMOVE_PRODUCT_FROM_CART', payload: product})}>Remove</button>
      </tr>
    `)}
    </table>
    </div>
    ${footer()}
  </div>
  `
  function checkIfDeal (product) {
    return product.deal ? html`<div><p>$${0.8 * product.price * product.quantity}</p><p class='bargain'>$${product.price * product.quantity}</p></div>` : html`<p>$${product.price * product.quantity}</p>`
  }
}

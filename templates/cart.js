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
      <tr onclick=${ () => dispatch({type: 'REMOVE_PRODUCT_FROM_CART', payload:product})}>
        <td><img src=${product.poster} /></td>
        <td><h4>${product.name}</h4></td>
        <td>${checkIfDeal(product)}</td>
      </tr>
    `)}
    </table>
    </div>
    ${footer()}
  </div>
  `
  function checkIfDeal (product){
    return product.deal ? html`<div><p>$${0.8*product.price}</p><p class='bargain'>$${product.price}</p></div>` : html`<p>$${product.price}</p>`
  }
}

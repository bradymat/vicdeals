const html = require('yo-yo')

const header = require('./header')
const footer = require('./footer')

module.exports = (state, dispatch) => {
  const { cart } = state
  return html`
  <div>
    ${header(state, dispatch)}
    <div id='cart'>
    <table>
    ${checkCartEmpty()}
    ${total()}
    </table>
    </div>
    ${footer()}
  </div>
  `
  function total () {
    if(cart.length !=0){
    const arr = cart.map((product) => {
      if (!product.deal){
        return product.price * product.quantity
      }
      return product.price * product.quantity * 0.8
    })
    const total = arr.reduce((a, b) => {
      return a+b
    })
    return html`<h3> Total is $${total}</h3>`
  }
  }
  function checkIfDeal (product) {
    return product.deal ? html`<div><p>$${0.8 * product.price * product.quantity}</p><p class='bargain'>$${product.price * product.quantity}</p></div>` : html`<p>$${product.price * product.quantity}</p>`
  }
  function checkCartEmpty () {
    if(cart.length !=0){
      return html`
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
      `
    }
    else return html`
    <h3>Not much of a rind in your cart</h3>
    `
  }
}

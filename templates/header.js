const html = require('yo-yo')

module.exports = (state, dispatch) => {
  const { cart } = state
  return html`
  <div id='header'>
    <div id='innerHeader'>
      <div id='logo'>
        <img onclick=${() => dispatch({type: 'GO_PAGE', payload: '/'})} src='https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png'/>
      </div>
      <div id='block'></div>
      <div id='searchAndCart'>
        <input onclick=${(e) => e.target.value = ''} onkeyup=${(e) => {
          dispatch({type: 'SEARCH_FOR_PRODUCTS', payload: e.target.value})
        }} placeholder='Search products'/>
        <button onclick=${() => dispatch({type: 'GO_PAGE', payload: '/cart'})}>Cart</button>
        ${checkIfCartPage()}
      </div>
    </div>
  </div>
  `
  function checkIfCartPage () {
    if(state.route != '/cart') return html`<h5>${numberInCart()}${total()}</h5>`
  }
  function numberInCart () {
    if(cart.length !=0){
    const arr = cart.map((product) => {
      return product.quantity
    })
    const total = arr.reduce((a, b) => {
      return a+b
    })
    return html`<span>${total} items in cart, </span>`
  }
}
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
    return html`<span>total is $${total}</span>`
  }
  }
}

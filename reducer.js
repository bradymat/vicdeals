const clone = require('clone')

module.exports = (state, action) => {
  const newState = clone(state)
  const { type, payload } = action
  switch (type) {
    // case 'FETCH_PRODUCTS':
    //   newState.products = payload
    //   return newState
    case 'GO_PAGE':
      newState.route = payload
      newState.searched = []
      return newState
    // case 'ORDER_BY_ABV':
    //   newState.products.sort((a, b) => a.abv > b.abv ? -1 : 1)
    //   return newState
    case 'ADD_PRODUCT_TO_CART':
      const check = newState.cart.filter((product) => {
        return product.name == payload
      })
      console.log('check', check);
      if(check.length < 1){
        const newItem = newState.products.filter((product) => {
          return product.name == payload
        })
        newItem[0].quantity = 1
        newState.cart.push(newItem[0])
        console.log('cart', newState.cart);
      }
      else{
        newState.cart.filter((product) => {
          if(product.name == payload) product.quantity +=1
        })
      }
      return newState
    case 'REMOVE_PRODUCT_FROM_CART':
      const itemToRemove = newState.cart.filter((product, index) => {
        if(product.name === payload.name) {
          if(product.quantity > 1)product.quantity -=1
          else newState.cart.splice(index, 1)
        }
      })
      return newState
    case 'SEARCH_FOR_PRODUCTS':
      newState.searched = newState.products.filter((product) => {
        return product.name.toLowerCase().includes(payload.toLowerCase())
      })
      return newState
    default:
      return newState
  }
}

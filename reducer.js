const clone = require('clone')

module.exports = (state, action) => {
  const newState = clone(state)
  const { type, payload } = action
  switch (type) {
    case 'GO_PAGE':
      newState.route = payload
      newState.searched = []
      return newState
    case 'ADD_PRODUCT_TO_CART':
      const check = newState.cart.filter((product) => {
        return product.name == payload
      })
      if(check.length < 1){
        const newItem = newState.products.filter((product) => {
          return product.name == payload
        })
        newItem[0].quantity = 1
        newState.cart.push(newItem[0])
      }
      else{
        newState.cart.filter((product) => {
          if(product.name == payload && product.quantity < product.stock) product.quantity +=1
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

const clone = require('clone')

module.exports = (state, action) => {
  const newState = clone(state)
  const { type, payload } = action
  switch(type){
    case 'FETCH_PRODUCTS':
      newState.products = payload
      return newState
    case 'TOGGLE_LOADING':
     newState.loading = !newState.loading
     return newState
    case 'ORDER_BY_ABV':
      newState.products.sort((a, b) => a.abv > b.abv ? -1 : 1)
      return newState
    case 'SEARCH_FOR_BEERS':
      newState.searched = newState.products.filter((product) => product.name.toLowerCase().includes(payload.toLowerCase()))
      return newState
    default:
      return newState
  }
}

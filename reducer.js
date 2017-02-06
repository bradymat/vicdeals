const clone = require('clone')

module.exports = (state, action) => {
  const newState = clone(state)
  const { type, payload } = action
  switch (type) {
    case 'GO_PAGE':
      newState.route = payload
      newState.searched = []
      return newState
    case 'GET_DEALS':
      newState.deals = payload
      return newState
    default:
      return newState
  }
}

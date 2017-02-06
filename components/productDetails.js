const html = require('yo-yo')

const header = require('./header')
const footer = require('./footer')

module.exports = (state, dispatch) => {
  const filtered = state.products.filter((product) => {
    return product.id == state.route.substr(1)
  })
  const product = filtered[0]
  const { name, poster, deal, details } = product
  return html`
  <div>
  ${header(state, dispatch)}
  <div class='details'>
  <div class='pic'>
  <h1>${name}</h1>
  <img src=${poster} />
  <div><p>${deal}</p></div>
  </div>
  <div class='deats'><p>${details}</p>
  </div>
  </div>
  ${footer()}
  </div>
  `
}

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
        <p>${product.deal}</p>
      </div>
    `)}
    </div>
    ${footer()}
  </div>
  `
}

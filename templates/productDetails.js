const html = require('yo-yo')

const header = require('./header')
const footer = require('./footer')

module.exports = (state, dispatch) => {
  return html`
  <div>
  ${header(state, dispatch)}
  blah
  ${footer()}
  </div>
  `
}

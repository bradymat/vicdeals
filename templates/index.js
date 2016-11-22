const html = require('yo-yo')

const header = require('./header')
const deals = require('./deals')

module.exports = (state, dispatch) => {
  return html`
  <div>
    ${header()}
    <div id='banner'><img src='https://image.tmdb.org/t/p/original/tFI8VLMgSTTU38i8TIsklfqS9Nl.jpg'/></div>
    ${deals()}
    <div id='footer'>
      <p>Copyright</p>
    </div>
  </div>
  `
}

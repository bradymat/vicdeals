const html = require('yo-yo')

const header = require('./header')
const footer = require('./footer')

module.exports = (state, dispatch) => {
  return html`
  <div>
    ${header()}
    <div id='banner'><img src='https://image.tmdb.org/t/p/original/tFI8VLMgSTTU38i8TIsklfqS9Nl.jpg'/></div>
    <div id='dailyDeals'>
      <div id='dealTitle'>
        <h3>Daily Deals</h3>
      </div>
      <div id='deals'>
        <div class='deal col-lg-2 col-xs-12' onclick=${() => console.log('hey') }>
          <h4>Doctor Strange</h4>
          <img src='https://image.tmdb.org/t/p/w300_and_h450_bestv2/xfWac8MTYDxujaxgPVcRD9yZaul.jpg' />
          <p>$25 from</p><p class='bargain'>$30</p>
        </div>
    </div>
    ${footer()}
  </div>
  `
}

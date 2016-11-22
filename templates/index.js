const html = require('yo-yo')

const header = require('./header')
const footer = require('./footer')

module.exports = (state, dispatch) => {
  const { backdrops, products } = state
  const deals = products.filter((product) => product.deal)
  return html`
  <div>
    ${header(state, dispatch)}
    <div id='banner'><img src=${backdrops}/></div>
    <div id='dailyDeals'>
      <div id='dealTitle'>
        <h3>Daily Deals</h3>
      </div>
      <div id='deals'>
        ${deals.map((deal) => html`
          <div class='deal col-lg-2 col-xs-12' onclick=${() => {
            console.log('deal details')
          } }>
            <h4>${deal.name}</h4>
            <img src=${deal.poster} />
            <p>$25 from</p><p class='bargain'>$30</p>
          </div>

          `)}
    </div>
    ${footer()}
  </div>
  `
}

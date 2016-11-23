const html = require('yo-yo')

const header = require('./header')
const footer = require('./footer')

module.exports = (state, dispatch) => {
  const { backdrops, products } = state
  const deals = products.filter((product) => product.deal)
  return html`
  <div>
    ${header(state, dispatch)}
    <div id='banner'>
    <div class='swiper-container'>
      <div class='swiper-wrapper'>
      ${backdrops.map((backdrop) => {
        return html`
        <div class='swiper-slide'>
          <img src=${backdrop}/>
        </div>
        `
      })
        }
        </div>
      </div>
    </div>
    <div id='dailyDeals'>
      <div id='dealTitle'>
        <h3>Daily Deals</h3>
      </div>
      <div id='deals'>
        ${deals.map((deal) => html`
          <div class='deal col-lg-2 col-xs-12' onclick=${() => {
            dispatch({type: 'GO_PAGE', payload: `/${deal.id}`})
          }}>
            <h4>${deal.name}</h4>
            <img src=${deal.poster} />
            <p>$${0.8 * deal.price}</p><p class='bargain'>$${deal.price}</p>
          </div>

          `)}
    </div>
    ${footer()}
  </div>
  `
}

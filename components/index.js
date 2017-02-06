const html = require('yo-yo')

const header = require('./header')
const footer = require('./footer')

module.exports = (state, dispatch) => {
  const { backdrops, products } = state
  const featureddeals = products.filter((product) => product.featured)
  return html`
  <div>
    ${header(state, dispatch)}
    <div id='banner'>
      ${backdrops.map((backdrop) => {
        return html`
          <img src=${backdrop}/>
        `
      })
        }
    </div>
    <div id='dailyDeals'>
      <div id='dealTitle'>
        <h3>Featured Deals</h3>
      </div>
      <div id='featuredDeals'>
        ${featureddeals.map((deal) => html`
          <div class='deal col-lg-2 col-xs-12' onclick=${() => {
            dispatch({type: 'GO_PAGE', payload: `/${deal.id}`})
          }}>
            <h4>${deal.name}</h4>
            <img src=${deal.poster} />
            <div><p>${deal.deal}</p></div>
          </div>

          `)}
    </div>
    ${footer()}
  </div>
  `
}

const html = require('yo-yo')

module.exports = (state, dispatch) => {
  return html`
  <div id='page' class='col-lg-12'>
    <div id='header' >
      <div id='innerHeader'>
        <div id='logo'></div>
        <div id='search'></div>
      </div>
    </div>
    <div id='slider'></div>
    <div id='dailyDeals'>
      <div id='dealTitle'>
        <p>Daily Deals</p>
      </div>
      <div id='deals'>
        <div class='deal col-lg-4 col-xs-12' ></div>
        <div class='deal col-lg-4 col-xs-12' ></div>
        <div class='deal col-lg-4 col-xs-12' ></div>
      </div>
    </div>
    <div id='footer'>
      <p>Copyright</p>
    </div>
  </div>
  `
}

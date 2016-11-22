const html = require('yo-yo')

module.exports = (state, dispatch) => {
  return html`
  <div id='dailyDeals'>
    <div id='dealTitle'>
      <h3>Daily Deals</h3>
    </div>
    <div id='deals'>
      <div class='deal col-lg-2 col-xs-12' >
        <h4>Doctor Strange</h4>
        <img src='https://image.tmdb.org/t/p/w300_and_h450_bestv2/xfWac8MTYDxujaxgPVcRD9yZaul.jpg' />
        <p>$25 from</p><p class='bargain'>$30</p>
      </div>
      <div class='deal col-lg-2 col-xs-12' >
        <h4>Doctor Strange</h4>
        <img src='https://image.tmdb.org/t/p/w300_and_h450_bestv2/xfWac8MTYDxujaxgPVcRD9yZaul.jpg' />
        <p>$25 from</p><p class='bargain'>$30</p>
      </div>
      <div class='deal col-lg-2 col-xs-12' >
        <h4>Doctor Strange</h4>
        <img src='https://image.tmdb.org/t/p/w300_and_h450_bestv2/xfWac8MTYDxujaxgPVcRD9yZaul.jpg' />
        <p>$25 from</p><p class='bargain'>$30</p>
      </div>
      <div class='deal col-lg-2 col-xs-12' >
        <h4>Doctor Strange</h4>
        <img src='https://image.tmdb.org/t/p/w300_and_h450_bestv2/xfWac8MTYDxujaxgPVcRD9yZaul.jpg' />
        <p>$25 from</p><p class='bargain'>$30</p>
      </div>
      <div class='deal col-lg-2 col-xs-12' >
        <h4>Doctor Strange</h4>
        <img src='https://image.tmdb.org/t/p/w300_and_h450_bestv2/xfWac8MTYDxujaxgPVcRD9yZaul.jpg' />
        <p>$25 from</p><p class='bargain'>$30</p>
      </div>
      <div class='deal col-lg-2 col-xs-12' >
        <h4>Doctor Strange</h4>
        <img src='https://image.tmdb.org/t/p/w300_and_h450_bestv2/xfWac8MTYDxujaxgPVcRD9yZaul.jpg' />
        <p>$25 from</p><p class='bargain'>$30</p>
      </div>
  </div>
  `
}

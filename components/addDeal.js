const html = require('yo-yo')

const header = require('./header')
const footer = require('./footer')

module.exports = (state, dispatch) => {
  const { server } = state
  return html`
  <div>
    ${header(state, dispatch)}
    <form  class='form' method='POST' action=${server}>
      <p>Name</p>
      <input type='text' name='name'/>
      <p>Image</p>
      <input type='text' name='poster'/>
      <p>Deal</p>
      <input type='text' name='deal'/>
      <p>Details</p>
      <input type='text' name='details'/>
      <button type='submit'>Add Deal</button>
    </form>
  </div>
  `
}


// {name: 'Iron Man', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/s2IG9qXfhJYxIttKyroYFBsHwzQ.jpg', price: 20, stock: 3, deal: true}

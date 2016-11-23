const html = require('yo-yo')

const header = require('./header')
const footer = require('./footer')

module.exports = (state, dispatch) => {
  const filtered = state.products.filter((product) => {
    return product.id == state.route.substr(1)
  })
  const product = filtered[0]
  const { poster, name, price } = product
  return html`
  <div>
  ${header(state, dispatch)}
  <div class='details'>
  <div class='pic'>
  <h1>${name}</h1>
  <img src=${poster} />
  ${checkIfDeal(product)}
  <button onclick=${() => {
    dispatch({type: 'ADD_PRODUCT_TO_CART', payload: name})
  }}>Add to cart</button>
  </div>
  <div class='deats'><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac tortor id tortor ultrices interdum in eget nulla. Aenean faucibus justo odio, non sodales sem pellentesque non. Quisque sit amet luctus nibh. Curabitur eu lacus nisl. Suspendisse finibus elit eget luctus pharetra. Suspendisse finibus lorem accumsan, semper orci a, posuere eros. Aliquam imperdiet tristique neque quis bibendum. Suspendisse imperdiet quam enim, ut consectetur orci scelerisque eu. Integer quam ligula, pellentesque non mi id, molestie eleifend velit. Suspendisse vestibulum dapibus mauris sit amet gravida. Cras facilisis, odio at ornare pulvinar, libero lacus mattis sem, quis fringilla augue metus nec sem. Proin in dui gravida, ultrices quam a, varius mi. Ut eget molestie sapien. Etiam faucibus, erat a convallis vulputate, eros dui accumsan odio, ac sollicitudin neque nibh et turpis. Quisque ut aliquet lorem.

Nulla facilisi. Donec quis risus in diam blandit laoreet. Vestibulum purus eros, sodales ac ipsum vel, posuere tincidunt quam. Pellentesque a massa turpis. Etiam ante erat, rutrum a hendrerit non, dapibus at nisi. Proin vestibulum justo fringilla dui ultricies congue eu eu urna. Aenean quis tellus neque. Proin a tempor dolor. Nulla facilisi. Phasellus facilisis leo risus, id egestas metus elementum sed. Ut iaculis sem quis dolor sollicitudin, et scelerisque nulla ullamcorper. Nulla pulvinar vulputate purus, ut feugiat orci hendrerit quis. Sed at egestas elit.
</p>
  </div>
  </div>
  ${footer()}
  </div>
  `
  function checkIfDeal (product) {
    return product.deal ? html`<div><br><p>$${0.8 * product.price} from </p><p class='bargain'>$${product.price}</p></div>` : html`<div><br><p>$${product.price}</p></div>`
  }
}

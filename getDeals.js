const request = require('superagent')

module.exports = (state, dispatch) => {
  const { server } = state
  request
  .get(server)
  .end((err, res) => {
    dispatch({type: 'GET_DEALS', payload: res.body.deals})
  })
}

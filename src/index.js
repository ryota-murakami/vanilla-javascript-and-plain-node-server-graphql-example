/**
 * A node in the DOM tree.
 *
 * @external Node
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node Node}
 */
;(function() {

  document.querySelector('#btn01').addEventListener('click', () => {
    // todo something
  })

  /**
   * @param {external:Node} node
   * @returns {boolean}
   */
  function isShow(elm) {
    return elm.style.opacity === '1'
  }

  /**
   * @param {external:Node} node
   * @returns {boolean}
   */
  function isHide(elm) {
    return elm.style.opacity === '0'
  }

  /**
   * @param {external:Node} node
   * @returns {void}
   */
  function fadeIn(elm) {
    elm.style.opacity = 1
  }

  /**
   * @param {external:Node} node
   * @returns {void}
   */
  function fadeOut(elm) {
    elm.style.opacity = 0
  }

  function gqlClientClass() {}

  /**
   * @param {string} query
   * @returns {Promise}
   */
  gqlClientClass.prototype.executeGraphQL == function(query) {
    if (!query.length) alert('executeGraphQL(): need query string')

    let header = new Headers()
    header.append('Content-Type', 'application/json')
    header.append('Accept', 'application/json')

    return fetch('http://localhost:4000/graphql', {
      method: 'post',
      body: JSON.stringify({ query: `{ ${query} }` }),
      headers: header
    })
      .then(response => {
        return response.json()
      })
      .catch(error => {
        alert('faild executeGraphQL(). debug info to console.log()')
        console.log(error)
      })
      .then(json => {
        return json
      })
  }

  /**
   * @param {string} query
   * @returns {string}
   */
  function queryLiteral(query) {
    return `{ ${query} }`
  }
})()

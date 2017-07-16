/**
 * A node in the DOM tree.
 *
 * @external Node
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node Node}
 */
(function () {
  /* const */
  const CLICK = 'click'
  const GraphQL = 'http://localhost:4000/graphql'
  const POST = 'post'

  /* dom cache */
  const run_simple_query_btn = document.querySelector('#js-event-listener_run-simple-query-btn')
  const simple_query_profile = document.querySelector('#js-manipulate-dom_simple-query-profile')
  const simple_query_profile_execute_query = document.querySelector('#js-manipulate-dom_simple-query-profile-execute-query')
  const simple_query_profile_result = document.querySelector('#js-manipulate-dom_simple-query-profile-result')

  /*
    event binding to dom
  */

  // toggle FadeIn/FadeOut
  run_simple_query_btn.addEventListener(CLICK, () => {
    const elm = simple_query_profile
    switch (true) {
      case isHide(elm):
        executeGraphQL('getSimpleRandomInteger')
        // TODO bind to HTML result data
        fadeIn(elm)
        break

      case isShow(elm):
        // TODO remove to HTML result data
        fadeOut(elm)
        break

      default:
        alert('CSS setting error; at #js-manipulate-dom_simple-query-profile')
    }
  })

  /**
   * @param {external:Node} node
   * @returns {boolean}
   */
  function isShow (elm) {
    return elm.style.opacity === '1'
  }

  /**
   * @param {external:Node} node
   * @returns {boolean}
   */
  function isHide (elm) {
    return elm.style.opacity === '0'
  }

  /**
   * @param {external:Node} node
   * @returns {void}
   */
  function fadeIn (elm) {
    requestAnimationFrame(function () { elm.style.opacity = 1 })
  }

  /**
   * @param {external:Node} node
   * @returns {void}
   */
  function fadeOut (elm) {
    requestAnimationFrame(function () { elm.style.opacity = 0 })
  }

  /**
   * @param {string} query
   * @returns {json} result
   */
  function executeGraphQL (query) {
    if (!query.length) alert('executeGraphQL(): need query string')

    let header = new Headers()
    header.append('Content-Type', 'application/json')
    header.append('Accept', 'application/json')

    fetch(GraphQL, {
      method: POST,
      body: JSON.stringify({query: `{ ${query} }`}),
      headers: header
    })
      .then(response => {
        return response.json()
      })
      .then(json => {
        console.log(json)
      })
  }
})()
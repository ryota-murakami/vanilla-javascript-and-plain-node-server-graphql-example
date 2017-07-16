/**
 * A node in the DOM tree.
 *
 * @external Node
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node Node}
 */
(function () {
  /* const */
  var CLICK = 'click'

  /* dom cache */
  var run_simple_query_btn = document.querySelector('#js-event-listener_run-simple-query-btn')
  var simple_query_profile = document.querySelector('#js-manipulate-dom_simple-query-profile')

  /*
    event binding to dom
  */

  // toggle FadeIn/FadeOut
  run_simple_query_btn.addEventListener(CLICK, function () {
    var elm = simple_query_profile
    switch (true) {
      case isHide(elm):
        // TODO execute GraphQL, recive result
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

})()
(function () {
  /* const */
  var CLICK = 'click';

  /* dom cache */
  var run_simple_query_btn = document.querySelector('#js-event-listener_run-simple-query-btn');
  var simple_query_profile = document.querySelector('#js-manipulate-dom_simple-query-profile');

  /* event binding to dom */

  // toggle FadeIn/FadeOut
  run_simple_query_btn.addEventListener(CLICK, function () {
    if (isShow(simple_query_profile)) {
      requestAnimationFrame(function () { simple_query_profile.style.opacity = 1 });
    } else if (simple_query_profile.style.opacity == 1) {
      requestAnimationFrame(function () { simple_query_profile.style.opacity = 0 });
    } else {
      alert('CSS setting error; at #js-manipulate-dom_simple-query-profile');
    }
  })


  function isShow (simple_query_profile) {
    return simple_query_profile.style.opacity == 0
  }
})()
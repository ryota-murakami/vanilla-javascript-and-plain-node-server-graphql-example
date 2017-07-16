(function () {
  var run_simple_query_btn = document.querySelector('#js-event-listener_run-simple-query-btn');
  var simple_query_profile = document.querySelector('#js-manipulate-dom_simple-query-profile');

  // toggle
  run_simple_query_btn.addEventListener('click', function () {
    // TODO if display node
    simple_query_profile.style.display = 'block';
    requestAnimationFrame(function () { simple_query_profile.style.opacity = 1 });

    // TODO if display block
  })
})()
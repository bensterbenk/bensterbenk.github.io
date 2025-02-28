(window).scroll(function() {
  var scrollTop = $(window).scrollTop();
  var height = $(document).height() - $(window).height();
  var scrolled = (scrollTop / height) * 100;
  console.log(scrolled);

  $('.animate-on-scroll').css({
    'opacity': scrolled / 100
  });
});
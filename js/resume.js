$(window).scroll(function() {
  if ($(window).scrollTop() >= 40 ) {
    $('.js-download-resume').addClass("is-scrolled");
  } else {
    $('.js-download-resume').removeClass("is-scrolled");
  }
})

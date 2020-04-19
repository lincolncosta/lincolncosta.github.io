(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $('#en-flag').click(function () {
    $('.lang-en').attr('style', 'display: block !important');    
    $('#en-flag').attr('style', 'filter: none !important;');
    $('.lang-pt-br').attr('style', 'display: none !important');
    $('#pt-br-flag').attr('style', 'filter: brightness(0.4)!important;'); 
  })

  $('#pt-br-flag').click(function () {
    $('.lang-pt-br').attr('style', 'display: block !important');    
    $('.lang-en').attr('style', 'display: none !important');
    $('#en-flag').attr('style', 'filter: brightness(0.4) !important;');    
    $('#pt-br-flag').attr('style', 'filter: none !important');
  })

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

(function ($) {

  "use strict";

  // Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });


  // Owl Carousels (UNCHANGED)
  $('.owl-banner').owlCarousel({
    items:1,
    loop:true,
    dots:true,
    nav:false,
    autoplay:true,
    margin:0,
    responsive:{
      0:{ items:1 },
      600:{ items:1 },
      1000:{ items:1 },
      1600:{ items:1 }
    }
  });

  $('.owl-services').owlCarousel({
    items:4,
    loop:true,
    dots:true,
    nav:false,
    autoplay:true,
    margin:5,
    responsive:{
      0:{ items:1 },
      600:{ items:2 },
      1000:{ items:3 },
      1600:{ items:4 }
    }
  });

  $('.owl-portfolio').owlCarousel({
    items:4,
    loop:true,
    dots:true,
    nav:true,
    autoplay:true,
    margin:30,
    responsive:{
      0:{ items:1 },
      700:{ items:2 },
      1000:{ items:3 },
      1600:{ items:4 }
    }
  });


  // ✅ FIXED MENU TOGGLE (IMPORTANT)
  if ($('.menu-trigger').length) {
    $(".menu-trigger").on('click', function(e) {
      e.preventDefault();
      e.stopPropagation(); // 🔥 prevents instant close

      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


  // ✅ FIXED SMOOTH SCROLL (PREVENT AUTO-CLOSE BUG)
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function(e) {

    if (
      location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &&
      location.hostname == this.hostname
    ) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      if (target.length) {

        e.preventDefault();

        var width = $(window).width();

        if (width < 991) {
          // 🔥 only close menu when REAL nav link clicked
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);
        }

        $('html,body').animate({
          scrollTop: target.offset().top + 1
        }, 700);

        return false;
      }
    }
  });


  // Active link scroll tracking (UNCHANGED but safer)
  $(document).on("scroll", function () {
    var scrollPos = $(document).scrollTop();

    $('.nav a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));

      if (refElement.length) {
        if (refElement.position().top <= scrollPos &&
            refElement.position().top + refElement.height() > scrollPos) {
          $('.nav ul li a').removeClass("active");
          currLink.addClass("active");
        }
      }
    });
  });


  // Page loading animation
  $(window).on('load', function() {
    $('#js-preloader').addClass('loaded');
  });


  // Submenu mobile fix (kept)
  function mobileNav() {
    var width = $(window).width();

    $('.submenu').on('click', function() {
      if (width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }

})(window.jQuery);
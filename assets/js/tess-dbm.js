(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // // Initialize Flickity Carroussel
  var $carousel = $('.carousel').flickity({
    fullscreen: true,
    imagesLoaded: true,
    initialIndex: 1, 
    resize: false,
  });

  $('.carousel .carousel-cell-image').click(function() {
    $carousel.flickity('toggleFullscreen');
  })

})(jQuery); // End of use strict


  let parallax_sections = document.querySelectorAll('.parallax');
  for (let elem of parallax_sections) {
    console.log(elem);
    const modifier = elem.getAttribute('data-depth')
    console.log(modifier);
   
    let instance = basicScroll.create({
      elem: elem,
      from: 'top-bottom',
      to: 'bottom-top',
      inside: (instance, percentage, props) => {
          console.log(`${elem.id} is inside from and to`)
      },
      outside: (instance, percentage, props) => {
          console.log(`${elem.id} is inside from and to`)
      },
      direct: true,
      props: {
        '--translateY': {
          from: `${ 200 * modifier }px`,
          to: `${ -200 * modifier }px`,
        }
      }
    })

    instance.start()
    
  }

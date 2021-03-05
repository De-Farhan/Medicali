// start navbar collapse js
$("#navbar ul li a").on("click", function () {
  $("#navbar .navbar-collapse").collapse("hide");
});
// end navbar collapse js

// // Add scrollspy to <body> start
$(document).ready(function () {
  $("body").scrollspy({ target: "#navbar", offset: 50 });
});
// // Add scrollspy to <body> end

// Add smooth scrolling on all links inside the navbar start
$(document).ready(function () {
  $("#navbar ul li a, #down_btn a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1500,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
// Add smooth scrolling on all links inside the navbar end

// start fixed nav
$(window).on("scroll", function () {
  var scrollamount = $(window).scrollTop();
  if (scrollamount >= 1) {
    $(".navbar").addClass("fixed_nav");
  } else {
    $(".navbar").removeClass("fixed_nav");
  }
});
// end fixed nav

// testi slider add start
  $("#testi_part .testi_part .testi_slider").slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-long-arrow-alt-left left"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-right right"></i>',
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
// testi slider add end
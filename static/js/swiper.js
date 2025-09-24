  document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1, // Show 3 slides at a time
      spaceBetween: 20, // Increase gap between slides
      loop: true, // Enable looping
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        640: {
          slidesPerView: 1, // 1 slide for small screens
          spaceBetween: 20, // Adjust gap for smaller screens
        },
        768: {
          slidesPerView: 2, // 2 slides for medium screens
          spaceBetween: 25, // Adjust spacing
        },
        1250: {
          slidesPerView: 3, // 3 slides for large screens
          spaceBetween: 30, // Keep larger gap
        },
      },
    });
  });
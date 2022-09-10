var swiper = new Swiper(".mySwiper", {
    loop:true,

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      600: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1000: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }  ,  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
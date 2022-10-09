
  const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 640px
      620: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      980: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      }
    }
  })
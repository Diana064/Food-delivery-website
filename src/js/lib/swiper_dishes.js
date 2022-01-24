var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 25,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is <= 499px
      950: {
        slidesPerView: 6,
  },
      450: {
        slidesPerView: 3,
    }
}
  });
  var swiper2 = new Swiper(".mySwiper2", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

var swiperPopular = new Swiper(".popular__container", {
  spaceBetween:32,
  grabCursor:true,
  centerdSlides:true,
  slidesPerView:'auto',
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
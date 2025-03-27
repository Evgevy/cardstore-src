const slider = document.querySelector('[data-slider="banner-block"]');

const initBannerSlider = () => {
  if (!slider) {
    return;
  }

  const swiper = new Swiper(slider, {
    slidesPerView: 'auto', // Позволяет слайдам занимать авто-ширину 
    // centeredSlides: true, // Центрирует активный слайд
    spaceBetween: 30,
    breakpoints: {
      300: {
        slidesPerView: 'auto',
        spaceBetween: 20
      },
      767: {
        slidesPerView: 'auto',
        spaceBetween: 30
      },
    },
    navigation: {
      nextEl: '.swiper-button-next.banners-block__next',
      prevEl: '.swiper-button-prev.banners-block__prev',
    }
  });
};

export { initBannerSlider }; 
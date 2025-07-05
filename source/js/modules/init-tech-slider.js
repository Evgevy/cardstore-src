const slider = document.querySelector('[data-slider="tech"]');

const initTechSlider = () => {
  if (!slider) {
    return;
  }

  const swiper = new Swiper(slider, {
    slidesPerView: 'auto', // Позволяет слайдам занимать авто-ширину 
    // centeredSlides: true, // Центрирует активный слайд
    spaceBetween: 16,
    // initialSlide: 1,
    // centeredSlides: true,  
    // loop: true,
    breakpoints: {
      300: {
        slidesPerView: 'auto',
        spaceBetween: 16
      },
      767: {
        slidesPerView: 'auto',
        spaceBetween: 16
      },
    },
    navigation: {
      nextEl: '.swiper-button-next.tech__next',
      prevEl: '.swiper-button-prev.tech__prev',
    }
  });
};

export { initTechSlider }; 
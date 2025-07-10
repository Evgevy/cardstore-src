const slider = document.querySelector('[data-slider="stock"]');

const initStock = () => {
  if (!slider) {
    return;
  }

  const swiper = new Swiper(slider, {
    slidesPerView: 1, 
    // centeredSlides: true, // Центрирует активный слайд
    spaceBetween: 16,
    // initialSlide: 1,
    // centeredSlides: true,  
    loop: true,
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
      nextEl: '.swiper-button-next.stock__next',
      prevEl: '.swiper-button-prev.stock__prev',
    }
  });
};

export { initStock }; 
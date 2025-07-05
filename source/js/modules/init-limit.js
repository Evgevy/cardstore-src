const slider = document.querySelector('[data-slider="limit"]');

const initLimit = () => {
  if (!slider) {
    return;
  }

  const swiper = new Swiper(slider, {
    slidesPerView: 'auto', 
    // centeredSlides: true, // Центрирует активный слайд
    spaceBetween: 16,
    // initialSlide: 1,
    // centeredSlides: true,  
    // loop: true,
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 16
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 16
      },
    },
    pagination: {
        el: slider.querySelector('.swiper-pagination.limit__pagination'), 
        clickable: true, 
    },
    navigation: {
      nextEl: '.swiper-button-next.limit__next',
      prevEl: '.swiper-button-prev.limit__prev',
    }
  });
};

export { initLimit }; 
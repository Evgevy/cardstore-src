const sliders = document.querySelectorAll('[data-slider="reviews"]');

const initReviewsSlider = () => {
  if (sliders.length === 0) {
    return;
  }

  sliders.forEach(slider => {
    const swiper = new Swiper(slider, {
        slidesPerView: 3,  
        spaceBetween: 16,
        breakpoints: {
          300: {
            slidesPerView: 'auto',
            spaceBetween: 16,
          },
          910: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
        navigation: {
          nextEl: '.swiper-button-next.reviews__next',
          prevEl: '.swiper-button-prev.reviews__prev',
        }
    
    });
  });
};

export { initReviewsSlider };
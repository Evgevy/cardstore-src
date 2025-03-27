const sliders = document.querySelectorAll('[data-slider="reviews"]');

const initReviewsSlider = () => {
  if (sliders.length === 0) {
    return;
  }

  sliders.forEach(slider => {
    const swiper = new Swiper(slider, {
        slidesPerView: 'auto',  
        spaceBetween: 16,
        pagination: {
            el: slider.querySelector('.swiper-pagination.reviews__pagination'), 
            clickable: true, 
        },
    
    });
  });
};

export { initReviewsSlider };
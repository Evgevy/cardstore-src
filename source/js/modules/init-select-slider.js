const sliders = document.querySelectorAll('[data-slider="select"]');

const initSelectSlider = () => {
  if (sliders.length === 0) {
    return;
  }

  sliders.forEach(slider => {
    const swiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: slider.querySelector('.swiper-pagination.select__pagination'), 
        clickable: true, 
    },
    });
  });
};

export { initSelectSlider };
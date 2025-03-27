const slider = document.querySelector('[data-slider="models"]');

const initModels = () => {
  if (!slider) {
    return;
  }

  const mediaQuery = window.matchMedia('(max-width: 767px)');
  let swiperInstance = null; // Переменная для хранения экземпляра Swiper

  const destroySwiper = () => {
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }
  };

  const initSwiper = () => {
    if (mediaQuery.matches) {
      swiperInstance = new Swiper(slider, {
        slidesPerView: 'auto',
        spaceBetween: 15,
      });
    } else {
      destroySwiper();
    }
  };

  initSwiper();
  mediaQuery.addEventListener('change', initSwiper);
};

export { initModels };
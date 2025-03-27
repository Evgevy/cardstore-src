const slider = document.querySelector('[data-slider="rew"]');

const initBlogBtn = () => {
  if (!slider) {
    return;
  }

  const mediaQuery = window.matchMedia('(max-width: 1024px)');
  let swiperInstance = null; 

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

export { initBlogBtn };
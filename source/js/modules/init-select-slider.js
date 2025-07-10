const sliders = document.querySelectorAll('[data-slider="select"]');

function throttle(func, delay) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

const initSelectSlider = () => {
  if (sliders.length === 0) {
    return;
  }

  sliders.forEach(slider => {
    const swiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 20,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      speed: 500,
      pagination: {
        el: slider.querySelector('.swiper-pagination.select__pagination'), 
        clickable: true, 
      },

      on: {
        init: function() {
          const swiperInstance = this;
          let isDragging = false;

          const partsCount = 6;

          const onMouseMove = throttle((e) => {
            if (isDragging) return;

            const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
            if (!activeSlide) return;

            const rect = activeSlide.getBoundingClientRect();
            const x = e.clientX - rect.left;

            const zoneWidth = rect.width / partsCount;
            let zone = Math.floor(x / zoneWidth);
            if (zone < 0) zone = 0;
            if (zone >= partsCount) zone = partsCount - 1;

            if (swiperInstance.activeIndex !== zone) {
              swiperInstance.slideTo(zone);
            }
          }, 100); // переключение не чаще чем раз в 100мс

          this.wrapperEl.addEventListener('mousemove', onMouseMove);

          this.wrapperEl.addEventListener('mousedown', () => {
            isDragging = true;
          });
          this.wrapperEl.addEventListener('mouseup', () => {
            isDragging = false;
          });
          this.wrapperEl.addEventListener('mouseleave', () => {
            isDragging = false;
          });
        }
      }
    });
  });
};

export { initSelectSlider };

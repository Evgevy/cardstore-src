const sliders = document.querySelectorAll('[data-slider="tab-list"]');

const initTabSlider = () => {
  if (sliders.length === 0) {
    return;
  }

  const mediaQuery = window.matchMedia('(max-width: 1190px)'); 

  const destroySwiper = (swiper) => {
    if (swiper) {
      swiper.destroy(true, true);
    }
  }

  const initSwiper = () => {
    if (mediaQuery.matches) { 
      sliders.forEach(slider => {
        let swiperInstance = new Swiper(slider, {
          slidesPerView: 'auto',
          spaceBetween: 20,
          breakpoints: {
            300: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            350: {
              slidesPerView: 'auto',
              centeredSlides: false,
            },
          },
          pagination: {
            el: slider.querySelector('.swiper-pagination.tab-pagination'),
            clickable: true,
          }
        
        });
        slider.swiperInstance = swiperInstance; 
      });
    } else { 
      sliders.forEach(slider => {
        if (slider.swiperInstance) {
          destroySwiper(slider.swiperInstance);
          slider.swiperInstance = null; 
        }
      });
    }
  };

  initSwiper(); 

  mediaQuery.addEventListener('change', initSwiper); 
};

export { initTabSlider };
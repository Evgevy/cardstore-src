const initBlogList = () => {
  const blogBtnSlider = document.querySelector('[data-slider="blog-btn"]');
  const tabSliders = document.querySelectorAll('[data-slider="tablist"]');
  
  let blogBtnSwiperInstance = null; 
  let tabSwiperInstances = [];

  const mediaQueryForBlogBtn = window.matchMedia('(max-width: 1024px)');
  const mediaQueryForTabList = window.matchMedia('(max-width: 767px)');

  const destroyBlogBtnSwiper = () => {
    if (blogBtnSwiperInstance) {
      blogBtnSwiperInstance.destroy(true, true);
      blogBtnSwiperInstance = null;
    }
  };

  const destroyTabSwiper = (swiper) => {
    if (swiper) {
      swiper.destroy(true, true);
    }
  };

  const initBlogBtnSwiper = () => {
    if (mediaQueryForBlogBtn.matches) {
      blogBtnSwiperInstance = new Swiper(blogBtnSlider, {
        slidesPerView: 'auto',
        spaceBetween: 15,
      });
    } else {
      destroyBlogBtnSwiper();
    }
  };

  const initTabSliders = () => {
    tabSliders.forEach((slider, index) => {
      if (mediaQueryForTabList.matches) {
        const swiper = new Swiper(slider, {
          slidesPerView: 1,
          spaceBetween: 20,
          // grabCursor: true,
          pagination: {
            el: slider.querySelector('.swiper-pagination.blog-pagination'),
            clickable: true,
          },
        });
        tabSwiperInstances[index] = swiper; 
      } else {
        destroyTabSwiper(tabSwiperInstances[index]);
        tabSwiperInstances[index] = null; 
      }
    });
  };

  
  initBlogBtnSwiper();
  initTabSliders();

  
  mediaQueryForBlogBtn.addEventListener('change', initBlogBtnSwiper);
  mediaQueryForTabList.addEventListener('change', initTabSliders);
}

export{initBlogList};
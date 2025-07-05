const slider = document.querySelector('[data-slider="blog"]');

const initBlog = () => {
  if (!slider) {
    return;
  }

  const swiper = new Swiper(slider, {
    slidesPerView: 'auto', // Позволяет слайдам занимать авто-ширину 
    // centeredSlides: true, // Центрирует активный слайд
    spaceBetween: 30,
    // initialSlide: 1,
    // centeredSlides: true,  
    // loop: true,
    breakpoints: {
      300: {
        slidesPerView: 'auto',
        spaceBetween: 16,
      },
      767: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next.blog__next',
      prevEl: '.swiper-button-prev.blog__prev',
    }
  });
};

export { initBlog }; 
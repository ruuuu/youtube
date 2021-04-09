const swiperChannel = new Swiper('.channel-slider', {
  // Optional parameters
  
  loop: true,
  slidesPerView: 1, //склько слайдев видно сразу
  spaceBetween: 20, //расстояние между слайдами

  breakpoints: {
    1900: {
      slidesPerView: 6,
      
    },
    1600: { // >= 1600px
      slidesPerView: 5,
      
    },
    1300: { // >= 1300px
      slidesPerView: 4,
      
    },
    1100: { // >= 1024px
      slidesPerView: 3,
      
    },
    800: {
      slidesPerView: 2,
      
    },
    // // when window width is >= 320px
    // 320: {
    //   slidesPerView: 2,
    //   spaceBetween: 20
    // },
    // // when window width is >= 480px
    // 480: {
    //   slidesPerView: 3,
    //   spaceBetween: 30
    // },
    // // when window width is >= 640px
    // 640: {
    //   slidesPerView: 4,
    //   spaceBetween: 40
    // }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },

  
});


const recommendedSwiper = new Swiper('.recommended-slider', {
  // Optional parameters
  
  loop: true,
  slidesPerView: 1, //склько слайдев видно сразу
  spaceBetween: 3, //расстояние между слайдами

  breakpoints: {
    1600: { // >= 1600px
      slidesPerView: 3,
      
    },
    1100: { // >= 1100px
      slidesPerView: 2,
      
    },
  
  },

  // Navigation arrows
  navigation: {
    nextEl: '.recommended-button-next',
    prevEl: '.recommended-button-prev',
  },

  
});



const recommendedChannelSlider = new Swiper('.recommended-channel-slider', {
  // Optional parameters
  
  loop: true,
  slidesPerView: 1, //склько слайдев видно сразу
  spaceBetween: 3, //расстояние между слайдами

  breakpoints: {
    1600: { // >= 1600px
      slidesPerView: 3,
      
    },
    1100: { // >= 1100px
      slidesPerView: 2,
      
    },
  
  },

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },

  
});



if(document.documentElement.scrollWidth <= 640){
    swiperChannel.destroy(); /*отключаем слайдер*/
    recommendedSwiper.destroy(); 
    recommendedChannelSlider.destroy();

}
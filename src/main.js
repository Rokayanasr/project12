const swiper = new Swiper('.swiper', {
    loop: true,
  
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 4,
    spaceBetween: 20,
    
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
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

  document.querySelectorAll('.nav-link').forEach(function(navLink) {
    navLink.addEventListener('click', function() {
      this.classList.add('change-color');
      setTimeout(() => {
        this.classList.remove('change-color');
      }, 500); // Change color for 3 seconds
    });
  });
  
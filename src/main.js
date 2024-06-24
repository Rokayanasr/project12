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
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
        900: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
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
  
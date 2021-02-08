var swiper = new Swiper('.swiper-container', {
    cssMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });


      var swiper = new Swiper('.clients__swiper', {
      slidesPerView: 4,
      spaceBetween: 30,
      freeMode: true,
      navigation: {
      nextEl: '.clients__btn-next',
      prevEl: '.clients__btn-prev',
    },
      pagination: {
        el: '.clients__pagination',
        clickable: true,
      },

      breakpoints: {
        944: {
          slidesPerView: 3
        },
        760: {
          slidesPerView: 2
        },
        
        360: {
          slidesPerView: 1
        },
      }
    });

    var swiper = new Swiper('.rewiews__swiper', {
    effect: 'fade',
    navigation: {
      nextEl: '.rewiews__btn-next',
      prevEl: '.rewiews__btn-prev',
    },
    pagination: {
      el: '.rewiews__pagination',
      clickable: true,
    },
    mousewheel: false,
    keyboard: true,
  });


  let menu_button = document.querySelector('.header__burger');
let menu_itself = document.querySelector('.header__menu');
let menu_list = document.querySelector('.header__list');
let body = document.querySelector('body');

menu_button.onclick = function() {
  menu_button.classList.toggle('active');
  menu_itself.classList.toggle('active');
};

menu_list.onclick = function() {
  menu_button.classList.toggle('active');
  menu_itself.classList.toggle('active');
};

    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })
/*с подключением библиотеки jquery:

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
    });
});

// закрытие меню при клике на ссылку
$(document).ready(function() {
    $('.header__list').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
    });
});*/


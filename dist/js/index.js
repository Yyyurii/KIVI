console.log('hello')

const navMenuItem = document.querySelectorAll('.nav-menu-container');
const nav = document.querySelector('.nav');

nav.addEventListener('click', (event) => {
  if (event.target && event.target.classList.contains('nav-menu-container')) {
    navMenuItem.forEach((item, i) => {
      if (event.target == item) {
        item.classList.add('_active');
      } else {
        item.classList.remove('_active');
      }
    })
  }
})


//webp
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp')
  }
});

//tabs
$(".tab_item").not(":first").hide();
$(navMenuItem).first().addClass("_active");
$(".tab").click(function () {
  $(".tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
// document.querySelectorAll('.tab_item').forEach((item, index) => {
//   if (item.classList.contains('hot-drinks')) {
//     item.style.display = 'block'
//   } else {
//     item.style.display = 'none'
//   }
// })

//header fixed
const header = $('.header__top-header');
const slider = $('.slider');
const sliderHeight = slider.height();
const hederHeight = header.height();

$(window).scroll(function () {
  if ($(this).scrollTop() > 75) {
    header.addClass('header__top-header__fixed');
    $('body').css({
      'paddingTop': hederHeight + 'px' // делаем отступ у body, равный высоте шапки
    });
  } else {
    header.removeClass('header__top-header__fixed');
    $('body').css({
      'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
    })
  }
  if ($(this).scrollTop() > 160) {
    const headerFixed = $('.header__top-header__fixed');
    const hederFixedHeight = headerFixed.height();
    slider.addClass('slider__fixed');
    $('.main-content').css({
      'paddingTop': '315px' // делаем отступ у body, равный высоте шапки
    });
    $('.slider__fixed').css({
      'top': hederFixedHeight + 'px',
      'margin': '0 auto',
      'background-image': 'none',
      'border-top': '1px solid white'
    })
  } else {
    slider.removeClass('slider__fixed');
    slider.css({
      'top': '0px',
      'margin': '1.5% auto',
      'background-image': 'url(../images/banner.png)',
      'border-top': ''
    })
    $('.main-content').css({
      'paddingTop': 0 // делаем отступ у body, равный высоте шапки
    });
  }
});

//scroll up
$(function () {
  $(".scrollupBtn").each(function (index) {
    $(this).on("click", function () {
      $("html, body").animate({
        scrollTop: 0
      }, 800);
    });
  });
});



$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $('.scrollup').fadeIn();
  }
  else {
    $('.scrollup').fadeOut();
  }

  // if ($(this).scrollTop() > 100) {
  //   hamburger.classList.remove('active');
  //   menuBox.style.visibility = menuBox.style.visibility === 'visible' ? '' : '';
  // }
});

//slider 
document.addEventListener('DOMContentLoaded', function () {
  // инициализация слайдера
  const slider = new SimpleAdaptiveSlider('.slider', {
    autoplay: false,
    interval: 5000,
    swipe: true,
  });
});
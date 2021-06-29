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
// $(".tab_item").not(":first").hide();
// $(navMenuItem).first().addClass("_active");
// $(".tab").click(function () {
//   $(".tab").removeClass("active").eq($(this).index()).addClass("active");
//   $(".tab_item").hide().eq($(this).index()).fadeIn()
// }).eq(0).addClass("active");
document.querySelectorAll('.tab_item').forEach((item, index) => {
  if (item.classList.contains('hot-drinks')) {
    item.style.display = 'block'
  } else {
    item.style.display = 'none'
  }
})

//header fixed
$(function () {
  const header = $('.header__top-header');
  const slider = $('.slider');
  const sliderHeight = slider.height();
  const hederHeight = header.height(); // вычисляем высоту шапки
  const fixedBlockHeighr = sliderHeight + hederHeight;
  console.log(fixedBlockHeighr);

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
    //   if($(this).scrollTop() > 160) {
    //    slider.addClass('slider__fixed');
    //    $('.main-content').css({
    //     'paddingTop': '415px' // делаем отступ у body, равный высоте шапки
    //  });
    //   } else {
    //     slider.removeClass('slider__fixed');
    //     $('.main-content').css({
    //       'paddingTop': 0 // делаем отступ у body, равный высоте шапки
    //    });
    //   }
  });
});


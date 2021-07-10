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
      'paddingTop': hederHeight + 'px'
    });
  } else {
    header.removeClass('header__top-header__fixed');
    $('body').css({
      'paddingTop': 0
    })
  }
  if ($(this).scrollTop() > 160) {
    const headerFixed = $('.header__top-header__fixed');
    const hederFixedHeight = headerFixed.height();
    slider.addClass('slider__fixed');
    $('.main-content').css({
      'paddingTop': '315px'
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
      'paddingTop': 0
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
});

//slider 
document.addEventListener('DOMContentLoaded', function () {
  const slider = new SimpleAdaptiveSlider('.slider', {
    autoplay: false,
    interval: 5000,
    swipe: true,
  });
});

//basket
const toBasket = document.querySelectorAll('.pizza__basket');

toBasket.forEach(item => {
  item.addEventListener('click', (event) => {
    getElementValue(event)

  })
});

function renderNewEl(event) {
  let parentEl = event.target.closest('.pizza__container');
  let imgSrcEl = parentEl.querySelector('img').getAttribute('src');
  let nameEl = parentEl.querySelector('.pizza__name').innerText;
  let ingredientsEl = parentEl.querySelector('.pizza__ingredients').innerText;
  let priceEl = parentEl.querySelector('.pizza__grn').innerText;
  let idEl = event.target.dataset.id;

  let orderList = document.querySelector('.order__list');
  let orderCard = document.createElement('div');
  orderCard.classList.add('order__item');
  orderCard.innerHTML = `
    <div class="order__item-details">
      <div class="item-img">
        <img src="${imgSrcEl}" alt="">
        <div class="order__quantity">
          <div class="order__minus-quantity quantity-img">
            <img src="images/minus.svg" alt="minus">
          </div>
          <span class="order__current-quantity">1</span>
          <div class="order__plus-quantity quantity-img">
            <img src="images/plus.svg" alt="plus">
          </div>
        </div>
      </div>
      <div class="order__item-description">
        <div class="order__item-name">${nameEl}</div>
        <div class="order__item-ingredients">${ingredientsEl}</div>
        <div class="order__price-value"><span class="order__price-grn-value">${priceEl}</span></div>
      </div>
      <div class="order__close-button">X</div>
    </div>
    <div class="order__item-price">
      <div class="order__finally-price">
        Всього: <span class="order__finally-price-value">118</span> грн
      </div>
    </div>
  `;
  orderList.append(orderCard);
};


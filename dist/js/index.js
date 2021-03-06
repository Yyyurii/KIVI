const navMenuItem = document.querySelectorAll('.nav-menu-container');
const nav = document.querySelector('.nav');
const order = document.querySelector('.order');
const orderPresent = document.querySelector('.order__present');
const orderAbsent = document.querySelector('.order__absent');
let orderList = document.querySelector('.order__list');
const mainContent = document.querySelector('.main-content');

nav.addEventListener('click', (event) => {
  order.style.display = 'none';
  mainContent.style.display = 'block';
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
const basket = document.querySelector('.header__basket');
const toBasket = document.querySelectorAll('.pizza__basket');
const basketQuantity = document.querySelector('.header__basket-quantity');


basket.addEventListener('click', () => {
  order.style.display = 'block';
  mainContent.style.display = 'none';
  if (orderList.childElementCount > 0) {
    orderPresent.style.display = 'block';
    orderAbsent.style.display = 'none';
  } else {
    orderPresent.style.display = 'none';
    orderAbsent.style.display = 'block';
  }

  navMenuItem.forEach(item => {
    item.classList.remove('_active');
  })
});

toBasket.forEach(basket => {
  basket.addEventListener('click', (event) => {
    renderNewEl(event);
    calculateBasketQuantity(event);
    calculateTotalPay();
  })
});

orderList.addEventListener('click', event => {
  if (event.target.classList.contains('order__plus-quantity')) {
    plusQuantity(event);
    calculateQuantity(event);
    calculateTotalPay();
  } else if (event.target.classList.contains('order__minus-quantity')) {
    minusQuantity(event);
    calculateQuantity(event);
    calculateTotalPay();
  } else if (event.target.classList.contains('order__close-button')) {
    removeOrderItem(event);
  }
});

function renderNewEl(event) {
  let parentEl = event.target.closest('.pizza__container');
  let imgSrcEl = parentEl.querySelector('img').getAttribute('src');
  let nameEl = parentEl.querySelector('.pizza__name').innerText;
  let ingredientsEl = parentEl.querySelector('.pizza__ingredients').innerText;
  let priceEl = parentEl.querySelector('.pizza__grn').innerText;
  let quantityEl;

  let orderCard = document.createElement('div');
  orderCard.classList.add('order__item');
  orderCard.innerHTML = `
      <div class="order__item-details">
      <div class="item-img">
        <img src="${imgSrcEl}" alt="">
        <div class="order__quantity">
          <div class="order__minus-quantity quantity-img">
          </div>
          <span class="order__current-quantity">1</span>
          <div class="order__plus-quantity quantity-img">
          </div>
        </div>
      </div>
      <div class="order__item-description">
        <div class="order__item-name">${nameEl}</div>
        <input type="hidden" name="pizza_name[]" " value="${nameEl}">
        <div class="order__item-ingredients">${ingredientsEl}</div>
        <div class="order__price-value"><span class="order__price-grn-value">${priceEl}</span></div>
      </div>
      <div class="order__close-button">X</div>
    </div>
    <div class="order__item-price">
      <div class="order__finally-price">
        ????????????: <span class="order__finally-price-value">${priceEl}</span>
      </div>
    </div>
  `;
  quantityEl = orderCard.querySelector('.order__current-quantity').innerText;
  console.log(quantityEl);
  orderList.append(orderCard);
};

function plusQuantity(event) {
  let parentEl = event.target.closest('.order__item');
  let currentQuantity = parentEl.querySelector('.order__current-quantity');
  let currentQuantityValue = parentEl.querySelector('.order__current-quantity').innerText;
  let input = parentEl.querySelector('input[name="pizza_name[]"]');
  let nameEl = parentEl.querySelector('.order__item-name').innerText;
  currentQuantity.innerText = ++currentQuantityValue;
  input.value = `${nameEl} ${currentQuantityValue}????`;
}

function minusQuantity(event) {
  let parentEl = event.target.closest('.order__item');
  let currentQuantity = parentEl.querySelector('.order__current-quantity');
  let currentQuantityValue = parentEl.querySelector('.order__current-quantity').innerText;
  let input = parentEl.querySelector('input[name="pizza_name[]"]');
  let nameEl = parentEl.querySelector('.order__item-name').innerText;
  if (!currentQuantityValue == 0 && currentQuantityValue > 1) {
    currentQuantity.innerText = --currentQuantityValue;
    input.value = `${nameEl} ${currentQuantityValue}????;`;
  }
}

function calculateQuantity(event) {
  let parentEl = event.target.closest('.order__item');
  let currentQuantity = parentEl.querySelector('.order__current-quantity').innerText;
  let price = parseInt(parentEl.querySelector('.order__price-value').innerText.match(/\d+/));
  let totalPay = parentEl.querySelector('.order__finally-price-value');
  totalPay.innerText = currentQuantity * price + ' ??????';
}

function removeOrderItem(event) {
  let parentEl = event.target.closest('.order__item');
  parentEl.remove();
  calculateBasketQuantity();
  calculateTotalPay();
}

(calculateBasketQuantity = () => {
  if (orderList.childElementCount > 0) {
    basketQuantity.style.opacity = '1';
  } else {
    basketQuantity.style.opacity = '0';
  }
  basketQuantity.innerText = orderList.childElementCount;
  console.log(orderList.childElementCount)
})();

calculateTotalPay = () => {
  const prices = document.querySelectorAll('.order__finally-price-value');
  const totalPrice = document.querySelector('.order__total-pay-value');
  let input = document.querySelector('input[name="pizza_price"]');
  let total = 0;

  prices.forEach(item => {
    total += Number(item.innerText.match(/\d+/));
  });
  totalPrice.innerText = total;
  input.value = totalPrice.innerText;
};

//forms
const forms = document.querySelectorAll('form');
const message = {
  loading: '????????????????...',
  success: '??????????????! ?????????? ???? ?? ???????? ????????????????',
  failure: '??????-???? ?????????? ???? ??????...'
};

forms.forEach(item => {
  postData(item);
});

function postData(form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    form.appendChild(statusMessage);

    const request = new XMLHttpRequest();
    request.open('POST', 'telegram.php');
    const formData = new FormData(form);

    request.send(formData);

    request.addEventListener('load', () => {
      if (request.status === 200) {
        console.log(request.response);
        openModal();
        form.reset();
        clearOrderCard();
        setTimeout(() => {
          closeModal();
        }, 3500);
        orderPresent.style.display = 'none';
        orderAbsent.style.display = 'block';
      } else {
        statusMessage.textContent = message.failure;
      }
    });
  });
};

//modal
const modalTrigger = document.querySelectorAll('[data-modal]');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('[data-close]');

function clearOrderCard() {
  const orderItem = document.querySelectorAll('.order__item');
  orderItem.forEach(item => {
    item.remove();
  });
};

modalTrigger.forEach(btn => {
  btn.addEventListener('click', openModal);
});

function closeModal() {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

function openModal() {
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
}

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.code === "Escape" && modal.classList.contains('show')) {
    closeModal();
  }
});

$('a').click(function(){
  console.log($(window).trigger('hashchange'));
});

// Time
const inputTime = document.querySelector('#appt');
const date = new Date();
const currentHours = date.getHours();
const currentMinutes = date.getMinutes() + 20;
inputTime.value = `${currentHours}:${currentMinutes}`;
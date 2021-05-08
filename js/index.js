console.log('hello')

const navMenuItem = document.querySelectorAll('.nav-menu-container');
const nav = document.querySelector('.nav');

nav.addEventListener('click', (event) => {
  if (event.target && event.target.classList.contains('nav-menu-container')) {
    navMenuItem.forEach((item, i) => {
      if (event.target == item) {
        item.classList.toggle('_active');
      } else {
        item.classList.remove('_active');
      }
    })
  }
})


//webp
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function() {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp')
  }
});
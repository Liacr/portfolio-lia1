document.addEventListener("DOMContentLoaded", function() {
  var burgerMenu = document.getElementById('burger-menu');
  var navLinks = document.getElementById('nav-links');

  burgerMenu.addEventListener('click', function() {
    navLinks.classList.toggle('show');
  });

  document.addEventListener('click', function(event) {
    var isClickInsideNav = navLinks.contains(event.target);
    var isClickInsideBurgerMenu = burgerMenu.contains(event.target);

    if (!isClickInsideNav && !isClickInsideBurgerMenu) {
      navLinks.classList.remove('show');
    }
  });
});
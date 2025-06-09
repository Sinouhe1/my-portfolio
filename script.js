const hamburger = document.getElementById('hamburger-btn');
const navigationMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function () {
  navigationMenu.classList.toggle('show');
});

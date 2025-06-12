const hamburger = document.getElementById('hamburger-btn');
const navigationMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function () {
  navigationMenu.classList.toggle('show');
});

window.addEventListener('resize', function () {
  if (window.innerWidth > 768) {
    navigationMenu.classList.remove('show');
  }
});

document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navigationMenu.classList.remove('show');
  });
});

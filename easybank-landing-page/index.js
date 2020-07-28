const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('show');
  menu.classList.toggle('show');
  overlay.classList.toggle('show');
});

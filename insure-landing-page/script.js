const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('show');
  menu.classList.toggle('show');
});

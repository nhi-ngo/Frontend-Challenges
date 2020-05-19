const toggle = document.querySelector('#toggle');
const body = document.querySelector('body');

toggle.addEventListener('change', () => {
  body.classList.toggle('show-dark');
  body.style.transition = 'all 0.2s linear';
});

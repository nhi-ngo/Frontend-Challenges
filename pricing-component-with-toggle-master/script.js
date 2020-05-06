const btnSwitch = document.querySelector('#switch');
const container = document.querySelector('.container');

btnSwitch.addEventListener('change', () => {
  container.classList.toggle('show-monthly');
});

const btnSwitch = document.querySelector('#switch');
const priceAnnually = Array.from(document.querySelectorAll('.price-annually'));
const priceMonthly = Array.from(document.querySelectorAll('.price-monthly'));

btnSwitch.addEventListener('click', () => {
  priceAnnually.forEach(el => el.classList.toggle('close'));
  priceMonthly.forEach(el => el.classList.toggle('open'));
});

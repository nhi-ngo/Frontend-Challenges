const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const overlay = document.querySelector('.overlay');

function openNav() {
  hamburger.classList.toggle('show');
  menu.classList.toggle('show');
  overlay.classList.toggle('show');
}

function closeNav() {
  hamburger.classList.remove('show');
  menu.classList.remove('show');
  overlay.classList.remove('show');
}

function handleSmoothScroll() {
  const anchors = document.querySelectorAll('#menu a');

  anchors.forEach(anchor => {
    anchor.addEventListener('click', e => {
      const sectionContent = document.querySelector(e.target.hash);

      e.preventDefault();
      sectionContent.scrollIntoView({ behavior: 'smooth' });

      closeNav();
    });
  });
}

hamburger.addEventListener('click', openNav);
window.addEventListener('load', handleSmoothScroll);

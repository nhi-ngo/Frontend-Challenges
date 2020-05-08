const form = document.querySelector('form');
const email = form.querySelector('#email');

function handleSubmit(e) {
  e.preventDefault();
  const emailInput = email.value;

  if (!isValid(emailInput)) {
    form.classList.add('error');
  } else {
    form.classList.remove('error');
  }
}

function isValid(email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', handleSubmit);

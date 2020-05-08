const form = document.querySelector('form');
const email = form.querySelector('#email');

function handleSubmit(e) {
  e.preventDefault();
  const emailInput = email.value;

  if (!emailValidate(emailInput)) {
    form.classList.add('error');
  } else {
    form.classList.remove('error');
    document.body.innerHTML = `<div style="display: flex; justify-content: center; margin-top: 30px"><h1>Thank You!</h1></div>
    `;
  }
}

function emailValidate(email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', handleSubmit);

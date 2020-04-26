const form = document.querySelector('form');

function handleSubmit(e) {
  e.preventDefault();
  const firstname = form.querySelector('#firstname').value;
  const lastname = form.querySelector('#lastname').value;
  const email = form.querySelector('#email').value;
  const password = form.querySelector('#password').value;

  if (firstname === '') {
    addErrorTo('firstname');
  } else {
    removeErrorFrom('firstname');
  }

  if (lastname === '') {
    addErrorTo('lastname');
  } else {
    removeErrorFrom('lastname');
  }

  if (email === '') {
    addErrorTo('email');
  } else if (!isValid(email)) {
    addErrorTo('email');
  } else {
    removeErrorFrom('email');
  }

  if (password === '') {
    addErrorTo('password');
  } else {
    removeErrorFrom('password');
  }
}

function addErrorTo(field) {
  const formControl = form[field].parentNode;
  formControl.classList.add('error');
}

function removeErrorFrom(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove('error');
}

function isValid(email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', handleSubmit);

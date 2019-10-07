let contactButton = document.getElementById('contact'),
  contactModal = document.getElementById('contactModal'),
  nameInput= document.getElementById('name'),
  emailInput = document.getElementById('email'),
  textInput = document.getElementById('text'),
  contactForm = contactModal.querySelector('.contact-form');

contactButton.addEventListener('click', function (evt) {
  evt.preventDefault();

  contactModal.classList.add('show');

  let storageName = '',
    storageEmail = '',
    isAvailableStorage = true;

  try {
    storageName = localStorage.getItem('name');
    storageEmail = localStorage.getItem('email');
  } catch (e) {
    isAvailableStorage = false;
  }

  if (isAvailableStorage) {
    if (storageName) {
      nameInput.value = storageName;

      emailInput.focus();
    } else {
      nameInput.focus();
    }

    if (storageEmail) {
      emailInput.value = storageEmail;

      textInput.focus();
    }
  } else {
    nameInput.focus();
  }
});

contactModal.addEventListener('click', function (evt) {
  let clickTarget = evt.target;

  while (clickTarget !== this) {
    if (clickTarget.dataset.action === 'close') {
      this.classList.remove('show');
      contactModal.classList.remove('error');
    }

    clickTarget = clickTarget.parentNode;
  }
});

contactForm.addEventListener('submit', function (evt) {
  console.log('1');

  if (!nameInput.checkValidity() || !textInput.checkValidity() || !emailInput.checkValidity()) {
    evt.preventDefault();
    console.log('error');
    contactModal.classList.remove("error");
    contactModal.offsetWidth = contactModal.offsetWidth;
    contactModal.classList.add('error');
  } else {
    localStorage.setItem('name', nameInput.value);
    localStorage.setItem('email', emailInput.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.code === 'Escape') {
    evt.preventDefault();
    if (contactModal.classList.contains("show")) {
      contactModal.classList.remove("show");
      contactModal.classList.remove("error");
    }
  }
});


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
      this.classList.remove('show')
    }

    clickTarget = clickTarget.parentNode;
  }
});

contactForm.addEventListener('submit', function () {
  localStorage.setItem('name', nameInput.value);
  localStorage.setItem('email', emailInput.value);
});



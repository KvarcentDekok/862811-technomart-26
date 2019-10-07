let cardsSection = document.querySelector('.cards-section'),
  counters = {
    "basket": 0,
    "bookmarks": 0
  },
  bookmarksNumber = document.getElementById('bookmarks-number'),
  basketNumber = document.getElementById('basket-number'),
  modalBasket = document.getElementById('basket');

cardsSection.addEventListener('click', function (evt) {
  let clickTarget = evt.target;

  while (clickTarget !== this) {
    if (clickTarget.classList.contains('button-alternative')) {
      let actionTarget = document.querySelector('.' + clickTarget.dataset.target);

      actionTarget.classList.add('added');

      counters[clickTarget.dataset.target] += 1;

      if (clickTarget.dataset.target === 'basket') {
        modalBasket.classList.add('show');

        let modalButton = modalBasket.querySelector('.button');

        modalButton.focus();
      }
    }

    clickTarget = clickTarget.parentNode;
  }

  bookmarksNumber.textContent = counters["bookmarks"];
  basketNumber.textContent = counters["basket"];
});

modalBasket.addEventListener('click', function (evt) {
  let clickTarget = evt.target;

  while (clickTarget !== this) {
    if (clickTarget.dataset.action === 'close') {
      this.classList.remove('show');
    }

    clickTarget = clickTarget.parentNode;
  }
});


let cardButtons = document.querySelectorAll('.card-buttons');

cardsSection.addEventListener('focusin', function (evt) {
  let focusTarget = evt.target;

  while (focusTarget !== this) {
    if (focusTarget.classList.contains('button-alternative')) {
      focusTarget.parentNode.classList.add('focused');
    }

    focusTarget = focusTarget.parentNode;
  }
});

cardsSection.addEventListener('focusout', function () {
  for (let i = 0; i < cardButtons.length; i++) {
    cardButtons[i].classList.remove('focused');
  }
});



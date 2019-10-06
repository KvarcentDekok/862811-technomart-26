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
      this.classList.remove('show')
    }

    clickTarget = clickTarget.parentNode;
  }
});



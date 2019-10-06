let mapLink = document.querySelector('.map'),
  mapModal = document.querySelector('.modal.map');

mapLink.addEventListener('click', function (evt) {
  evt.preventDefault();

  mapModal.classList.add('show');
});

mapModal.addEventListener('click', function (evt) {
  let clickTarget = evt.target;

  while (clickTarget !== this) {
    if (clickTarget.dataset.action === 'close') {
      this.classList.remove('show')
    }

    clickTarget = clickTarget.parentNode;
  }
});



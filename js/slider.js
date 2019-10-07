let promoGallery = document.querySelector('.promo-gallery'),
  galleryRow = promoGallery.querySelector('.gallery-row'),
  leftButton = promoGallery.querySelector('.left'),
  rightButton = promoGallery.querySelector('.right'),
  galleryDots = promoGallery.querySelectorAll('.gallery-dot'),
  innerButtons = promoGallery.querySelectorAll('.button');

leftButton.addEventListener('click', function (evt) {
  evt.preventDefault();

  galleryRow.classList.remove('second');
  galleryRow.classList.add('first');

  for (let i = 0; i < galleryDots.length; i++) {
    galleryDots[i].classList.remove('active');
    innerButtons[i].removeAttribute('tabindex');
  }

  galleryDots[0].classList.add('active');
  innerButtons[1].tabIndex = '-1';
});

rightButton.addEventListener('click', function (evt) {
  evt.preventDefault();

  galleryRow.classList.remove('first');
  galleryRow.classList.add('second');

  for (let i = 0; i < galleryDots.length; i++) {
    galleryDots[i].classList.remove('active');
    innerButtons[i].removeAttribute('tabindex');
  }

  galleryDots[1].classList.add('active');
  innerButtons[0].tabIndex = '-1';
});

promoGallery.addEventListener('click', function (evt) {
  let target = evt.target;

  while (target !== this) {
    if (target.classList.contains('gallery-dot')) {
      if (target === galleryDots[0]) {
        galleryRow.classList.remove('second');
        galleryRow.classList.add('first');

        for (let i = 0; i < galleryDots.length; i++) {
          galleryDots[i].classList.remove('active');
          innerButtons[i].removeAttribute('tabindex');
        }

        galleryDots[0].classList.add('active');
        innerButtons[1].tabIndex = '-1';
      } else if (target === galleryDots[1]) {
        galleryRow.classList.remove('first');
        galleryRow.classList.add('second');

        for (let i = 0; i < galleryDots.length; i++) {
          galleryDots[i].classList.remove('active');
          innerButtons[i].removeAttribute('tabindex');
        }

        galleryDots[1].classList.add('active');
        innerButtons[0].tabIndex = '-1';
      }
    }

    target = target.parentNode;
  }
});


let servicesList = document.querySelector('.services-list'),
  servicesItems = servicesList.querySelectorAll('.services-item'),
  serviceBodies = document.querySelectorAll('.service-body');

servicesList.addEventListener('click', function (evt) {
  let clickTarget = evt.target;

  while (clickTarget !== this) {
    if (clickTarget.classList.contains('services-item')) {
      let actionTarget = document.getElementById(clickTarget.dataset.target);

      for (let i = 0; i < servicesItems.length; i++) {
        servicesItems[i].classList.remove('active');
        serviceBodies[i].classList.remove('active');
      }

      clickTarget.classList.add('active');
      actionTarget.classList.add('active');
    }

    clickTarget = clickTarget.parentNode;
  }
});


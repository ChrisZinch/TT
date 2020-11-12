'use strict';

const cardButtons = document.querySelectorAll('.card__button');

const secondary = (event) => {
  event.target.classList.remove('primary');
  event.target.classList.add('secondary');
};

cardButtons.forEach((button) => {
  button.addEventListener('click', secondary);
});

'use strict';

let naTahu = 'circle';

const btnElm = document.querySelectorAll('.policko');
for (let i = 0; i < btnElm.length; i += 1) {
  btnElm[i].addEventListener('click', (event) => {
    if (
      naTahu === 'circle' &&
      !event.target.classList.contains('board__field--circle') &&
      !event.target.classList.contains('board__field--cross')
    ) {
      event.target.classList.add('board__field--circle');
      document.querySelector('.hrac').innerHTML = `<h2>Hraje:</h2>
      <img src="img/cross.svg" alt="Křížek" />`;
      naTahu = 'cross';
      event.target.setAttribute('disabled', true);
    } else if (
      naTahu === 'cross' &&
      !event.target.classList.contains('board__field--circle') &&
      !event.target.classList.contains('board__field--cross')
    ) {
      event.target.classList.add('board__field--cross');
      document.querySelector('.hrac').innerHTML = `<h2>Hraje:</h2>
      <img src="img/circle.svg" alt="Kolečko" />`;
      naTahu = 'circle';
      event.target.setAttribute('disabled', true);
    }
  });
}
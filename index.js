'use strict';
//ÚKOL 4.
let naTahu = 'circle';

const fieldElm = document.querySelectorAll('.policko');

const game = (event) => {
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
    isWinningMove(event.target);
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
    isWinningMove(event.target);
  }

  console.log('Get position', getPosition(event.target));
  console.log('Get symbol', getSymbol(event.target));
  console.log('Winning', isWinningMove(event.target));
};

for (let i = 0; i < fieldElm.length; i += 1) {
  fieldElm[i].addEventListener('click', game);
}

//ÚKOL 5.
const boardSize = 10;

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fieldElm.length) {
    if (field === fieldElm[fieldIndex]) {
      break;
    }
    fieldIndex++;
  }
  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};

const getField = (row, column) => {
  fieldElm[row * boardSize + column];
};

const getSymbol = (field) => {
  if (field.classList.contains('board__field--cross')) {
    return 'cross';
  } else if (field.classList.contains('board__field--circle')) {
    return 'circle';
  }
};

const vyhernichZnaku = 5;

const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;

  let radek = 1;

  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    radek++;
    i--;
  }

  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    radek++;
    i++;
  }

  if (radek >= vyhernichZnaku) {
    return true;
  }

  let sloupec = 1;
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    sloupec++;
    i--;
  }

  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    sloupec++;
    i++;
  }

  if (sloupec >= vyhernichZnaku) {
    return true;
  }

  return false;
};

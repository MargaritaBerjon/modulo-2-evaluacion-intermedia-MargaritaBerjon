'use strict';

const input = document.querySelector('.js-input');
const btn = document.querySelector('.js-button');
const clue = document.querySelector('.js-clue');
const numberTry = document.querySelector('.js-numbertry');
const myNumber = getRandomNumber(100);
let clueMessageShow = '';

function getRandomNumber() {
  return Math.ceil(Math.random() * max);
}
console.log('Mi número aleatorio es ' + myNumber);

function paintClues(cluemessage) {
  return (clue.innerHTML = cluemessage);
}

function game(number) {
  if (isNaN(number) || number < 1 || number > 100) {
    clueMessageShow = 'El número debe estar entre 1 y 100';
  } else if (number === myNumber) {
    clueMessageShow = '¡Has ganado campeona!';
  } else if (number > myNumber) {
    clueMessageShow = 'Demasiado alto';
  } else {
    clueMessageShow = 'Demasiado bajo';
  }
  paintClues(clueMessageShow);
}

let acc = 0;
function counterClickFunction() {
  acc += 1;
  numberTry.innerHTML = acc;
}

function handlerFunction() {
  const userNumber = parseInt(input.value);
  counterClickFunction();
  game(userNumber);
}

btn.addEventListener('click', handlerFunction);

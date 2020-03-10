const input = document.querySelector('.js-input');
const btn = document.querySelector('.js-button');
const clue = document.querySelector('.js-clue');
const numberTry = document.querySelector('.js-numbertry');
const myNumber = getRandomNumber();

function getRandomNumber() {
  return Math.ceil(Math.random() * 100);
}
console.log('Mi número aleatorio es ' + myNumber);

function game(number) {
  if (isNaN(number) || number < 1 || number > 100) {
    clue.innerHTML = 'El número debe estar entre 1 y 100';
  } else if (number === myNumber) {
    clue.innerHTML = '¡Has ganado campeona!';
  } else if (number > myNumber) {
    clue.innerHTML = 'Demasiado alto';
  } else {
    clue.innerHTML = 'Demasiado bajo';
  }
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

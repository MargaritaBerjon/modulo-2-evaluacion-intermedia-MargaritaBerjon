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
  if (number === myNumber) {
    clue.innerHTML = '¡Has ganado campeona!';
  } else if (number > myNumber) {
    clue.innerHTML = 'Demasiado alto';
  } else {
    clue.innerHTML = 'Demasiado bajo';
  }
}

function handlerFunction() {
  const userNumber = parseInt(input.value);
  game(userNumber);
}

btn.addEventListener('click', handlerFunction);

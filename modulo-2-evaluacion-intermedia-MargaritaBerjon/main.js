const input = document.querySelector('.js-input');
const btn = document.querySelector('.js-button');
const clue = document.querySelector('.js-clue');
const numberTry = document.querySelector('.js-numbertry');
const myNumber = 'Mi número aleatorio es ' + getRandomNumber();

function getRandomNumber() {
  return Math.ceil(Math.random() * 100);
}
console.log(myNumber);

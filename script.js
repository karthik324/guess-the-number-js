'use strict';
/*
console.log(document.querySelector('.message'));
document.querySelector('.message').textContent = 'Hoi';
document.querySelector('.guess').value = 18;
console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'You lost';
        document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
        document.querySelector('.message').textContent = '📉 Too Low';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
          document.querySelector('.message').textContent = 'You lost';
          document.querySelector('.score').textContent = 0;
      }
  }
});

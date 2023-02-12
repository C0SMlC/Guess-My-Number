'use strict';
let score = 20;
let highscore = 0;
let num = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  num = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'black';
});

document.querySelector('.number').addEventListener('click', function () {
  document.querySelector('.number').textContent = num;
});
// document.querySelector('.number').textContent = num;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score != 0) {
    if (!guess) {
      document.querySelector('.message').textContent = 'No Number ⛔';
    } else if (num == guess) {
      document.querySelector('.message').textContent = 'Correct Number !';
      document.querySelector('.score').textContent = --score;
      document.querySelector('body').style.backgroundColor = 'green';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess < num) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess > num) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = 'You Lost The Game';
  }
});

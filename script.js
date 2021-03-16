'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const guess = document.querySelector('.guess');
const number = document.querySelector('.number');
const body = document.querySelector('body');

const message = (message) => {
  document.querySelector('.message').textContent = message;
};

const scoreDom = (score) => {
  document.querySelector('.score').textContent = score;
};

// Check button click
document.querySelector('.check').addEventListener('click', () => {
  const guessValue = Number(guess.value);

  // When there is no input
  if (!guessValue) {
    message('⛔ No Number!');
  
    // When player wins
  } else if (guessValue === secretNum) {
    message('🎊 Correct Number!');
    number.textContent = secretNum;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    
    // Implement Highscore
    if (score > highScore) {
      highScore = score
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guessValue !== secretNum) {
    if (score > 1) {
      message(guessValue > secretNum ? '📈 Too High!' : '📉 Too Low!');
      score--;
      scoreDom(score);
    } else {
      message('💣 You lost the game!');
      score--;
      scoreDom(score);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;

  number.textContent = '?';
  number.style.width = '15rem';
  guess.value = '';
  message('Start guessing...');
  scoreDom(20);
  body.style.backgroundColor = '#222';  
});

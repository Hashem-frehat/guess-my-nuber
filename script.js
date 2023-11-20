'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightscore = 0;

const themessage = function (allmessage) {
  document.querySelector('.message').textContent = allmessage;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   when there is no number
  if (!guess) {
    // document.querySelector('.message').textContent = 'no input';
    themessage('no input');
  }
  //  when win
  else if (guess === number) {
    // document.querySelector('.message').textContent = 'true number';
    themessage('you win');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60B457';
    document.querySelector('.number').style.width = '40rem';
    if (score > hightscore) {
      hightscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }
  //   when the input is wrong
  else if (guess !== number) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      // guess > number ? 'too hight' : 'a littile bit';
      themessage(guess > number ? 'too hight' : 'a littile bit');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = ' you lose';
      themessage('you lose');
    }
  }

  //   when the input hight
  //   if (guess > number) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'too hight';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = ' you lose';
  //     }
  //   }
  //      when the input low
  //   if (guess < number) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = ' a little bit';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = ' you lose';
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 21);
  score = 20;

  //   document.querySelector('.message').textContent = 'start guessing ...';
  themessage('start guessing ...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
});

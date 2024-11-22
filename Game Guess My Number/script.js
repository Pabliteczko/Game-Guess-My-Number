'use strict';

const creatRandom = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
let secretNumber = creatRandom();
const startScore = 20;
let score = startScore;
let highscore = 0;
const displayMassage = message =>
  (document.querySelector('.message').textContent = message);

const displayScore = score =>
  (document.querySelector('.score').textContent = score);

const displayNumber = number =>
  (document.querySelector('.number').textContent = number);

const bodyBackgroundColor = color =>
  (document.querySelector('body').style.backgroundColor = color);

const widthNumberWindow = widthSize =>
  (document.querySelector('.number').style.width = widthSize);
displayScore(score);

// Rools game
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When there is no input
  if (!guess) {
    displayMassage(`No number!`);

    //When players win
  } else if (guess === secretNumber) {
    displayMassage(`Correct number 🎉`);
    displayNumber(secretNumber);
    bodyBackgroundColor('#60b347');
    widthNumberWindow('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong (too high or too low)
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMassage(`Too ${guess > secretNumber ? `high` : `low`}!`);
      score--;
      displayScore(score);
    } else {
      displayMassage(`You lost the game`);
      displayScore(0);
    }
  }
});

// Again button
document.querySelector('.again').addEventListener('click', function () {
  score = startScore;
  secretNumber = creatRandom();

  displayMassage(`Start guessing...`);
  displayScore(score);
  document.querySelector('.guess').value = ``;
  displayNumber(`?`);

  bodyBackgroundColor('#222');
  widthNumberWindow('15rem');
});

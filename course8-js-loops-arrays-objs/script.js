var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

do {
  guess = prompt('I am thinking of a number between 1 and 10. What is it?');
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
  }
} while (!correctGuess)

document.write("<p>You guessed the number!</p>");
document.write("<p>It took you " + guessCount + " tries to guess the number: " + randomNumber + ".</p>");
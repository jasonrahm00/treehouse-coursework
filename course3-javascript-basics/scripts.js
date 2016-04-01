var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = parseInt(prompt("Ia m thinking of a number between 1 and 6. What is it?"));
if (guess === randomNumber) {
  correctGuess = true;
} else if (guess < randomNumber) {
  var guessMore = prompt("Try again. The number I am thinking of is more than " + guess);
  if (parseInt(guessMore) === randomNumber) {
    correctGuess = true;
  }
} else if (guess > randomNumber) {
  var guessMore = prompt("Try again. The number I am thinking of is less than " + guess);
  if (parseInt(guessMore) === randomNumber) {
    correctGuess = true;
  }
}
if (correctGuess) {
  document.write("<p>You guessed the number!</p>");
} else {
  document.write("<p>Sorry. The number was " + randomNumber + ".</p>");
}
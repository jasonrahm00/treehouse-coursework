var correctGuess = false;

//Generate a random number between 1 and 6
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = parseInt(prompt("Ia m thinking of a number between 1 and 6. What is it?"));

/*These conditional statements check to see if the user chooses the correct number. If it's higher or lower, they get to choose again.*/
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

//Print a message telling the user whether or not they guessed the right number
if (correctGuess) {
  document.write("<p>You guessed the number!</p>");
} else {
  document.write("<p>Sorry. The number was " + randomNumber + ".</p>");
}
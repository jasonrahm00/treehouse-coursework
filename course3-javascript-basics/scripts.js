var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt("I am thinking of a number between 1 and 6. What is it?");
if (parseInt(guess) === randomNumber) {
  alert("My guessed right");
} else {
  alert("My number was " + randomNumber + ". You chose " + guess + ". You guessed wrong.");
}
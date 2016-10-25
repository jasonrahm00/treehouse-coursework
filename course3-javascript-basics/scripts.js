// Quiz begins, no answers correct
var correct = 0;

// Reusable function to check if response is correct
function answerCheck(x, y) {
  if (x.toUpperCase() === y) {
    correct += 1;
  }
}

//Asking questions
var answer1 = prompt("Name a programming language that's also a gem");
answerCheck(answer1, 'RUBY');

var answer2 = prompt("Name a programming language that's also a snake");
answerCheck(answer2, 'PYTHON');

var answer3 = prompt("What language do you use to style web pages?");
answerCheck(answer3, 'CSS');

var answer4 = prompt("What language do you use to build the structure of web pages?");
answerCheck(answer4, 'HTML');

var answer5 = prompt("What language do you use to add interactivity to a web page?")
answerCheck(answer5, 'JAVASCRIPT');

//Output results
document.write("<p>You got " + correct + " out of 5 questions correct.</p>");

//Output rank
if (correct === 5) {
  document.write("<p><strong>You earned a gold star!</strong></p>");
} else if (correct >= 3) {
  document.write("<p><strong>You earned a silver star!</strong></p>");
} else if (correct >= 1) {
  document.write("<p><strong>You earned a bronze star!</strong></p>");
} else {
  document.write("<p><strong>No star for you!</strong></p>");
}
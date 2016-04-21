var questions = [
  ['How many states are in the U.S.?', 50],
  ['How many continents are there?', 7],
  ['How many legs does an insect have?', 6]
];

var question, answer, repsonse, html, correctAnswers = 0, correct = [], wrong = [];

function print(message) {
  document.getElementById('results').innerHTML = message;
}

function buildList(arr) {
  var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i += 1) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = parseInt(prompt(question));
  if (response === answer) {
    correctAnswers += 1;
    correct.push(question);
  } else {
    wrong.push(question);
  }
}

html = "You got " + correctAnswers + " question(s) right.";
html += "<h3>You go these questions correct:</h3>";
html += buildList(correct);
html += "<h3>You got these questions wrong:</h3>";
html += buildList(wrong);
print(html)
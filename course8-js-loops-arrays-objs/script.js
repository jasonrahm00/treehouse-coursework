var person = {
  name: 'Jason',
  city: 'Denver',
  age: 34,
  awesome: true,
  skills: ['JavaScript', 'HTML', 'CSS', 'AngularJS', 'jQuery']
};

function print(message) {
  document.getElementById('results').innerHTML = message;
}

for (x in person) {
  console.log(x, ': ', person[x]);
}
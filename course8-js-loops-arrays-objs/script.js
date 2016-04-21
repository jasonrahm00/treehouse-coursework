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

var message = '<p>Hello. My name is ' + person.name + '.</p>';
message += '<p>I live in ' + person.city + '.</p>';
message += '<p>I am ' + person.age + ' years old.</p>';
message += '<p>I have the following skills: ' + person.skills.join(', ') + '.</p>'
print(message);
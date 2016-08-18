var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) {
    if(xhr.status === 200) {
      var employees = JSON.parse(xhr.responseText);
      
      //Call createEmployeeList function and pass in employees
      createEmployeeList(employees);
      
    } else {
      console.log(xhr.status + ' ' + xhr.statusText);
    }
  }
};

xhr.open('GET', 'data/employees.json');
xhr.send();

function createEmployeeList(x) {
  
  var list = document.getElementById('employeeList');
  
  var ul = document.createElement('ul');
  ul.className = 'bulleted';
  list.appendChild(ul);
  
  //Iterate over each employee in the JSON object array
    //Create li for each person and set innerText to their name
    //Add class in/out depending on the inoffice value
    //Append list item to the unordered list to so it displays on the page
  for(var i = 0; i < x.length; i++) {
    var y = x[i];
    var li = document.createElement('li');
    if(y.inoffice) {
      li.className = 'in';
    } else {
      li.className = 'out';
    }
    li.innerText = y.name;
    ul.appendChild(li);
  }
  
}
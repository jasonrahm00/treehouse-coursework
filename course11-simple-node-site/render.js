const fs = require('fs');

function mergeValues(values, content) {
  //Iterate over keys
  for(var key in values) {
    //Replace all {{key}} with the value from the values object
    content = content.replace("{{" + key + "}}", values[key]);
  }
  //Return merged content
  return content;
}

function view(templateName, values, response) {
  //Read from the template file
  var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: 'utf8'});
  //Insert values into the content
  fileContents = mergeValues(values, fileContents);
  //Write contents to the response
  response.write(fileContents);
}

module.exports.view = view;
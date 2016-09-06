//Problem: We need a simple way to look at a user's badge acount and JavaScript points
//Solution: Use Node.js to connect with Treehouse's API to get profile information to print out
const https = require("https");
var username = "jasonrahm";

function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript.";
  console.log(message);
 }

//Connect to the API URL (https://teamtreehouse.com/username.json)
var request = https.get('https://teamtreehouse.com/' + username + '.json', function(response) {
  var body = "";
  
  //Read data
  response.on('data', function(chunk) {
    body += chunk;
  });
  response.on('end', function() {
    //Parse data as JSON
    var profile = JSON.parse(body);
    //Print data
    printMessage(username, profile.badges.length, profile.points.JavaScript);
  });
});

request.on("error", function(e) {
  console.error(e);
});

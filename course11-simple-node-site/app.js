var router = require("./router.js");
//Problem: Need a simple way to look at a users badge count and js points from a web browser
//Solution: Use Node.js to perform the profile look ups and serve our templates via HTTP

//Create a web server
const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;

http.createServer((request, response) => {
  router.home(request, response);
  router.user(request, response);
}).listen(port);

console.log(`Server running at http://${hostname}:${port}/`);
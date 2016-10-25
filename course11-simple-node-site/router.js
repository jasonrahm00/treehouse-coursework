var Profile = require("./profile.js");
var render = require("./render.js");
var queryString = require("querystring");
var commonHeader = {'Content-Type': 'text/html'};
    
//Handle HTTPS route GET / and POST  / i.e. Home
function home(request, response) {
  //if url == "/" && GET
  if (request.url === "/") {
    if(request.method.toLowerCase() === "get") {
      //show search
      response.writeHead(200, commonHeader);
      render.view('header', {}, response);
      render.view('search', {}, response);
      render.view('footer', {}, response);
      //response.write("Search\n");
      //response.end('Footer\n');
      response.end();
    } else {
      //if url == "/" && POST
        //get the POST data from body
        request.on("data", function(postBody) {
          //extract username
          var query = queryString.parse(postBody.toString());
          //redirect to /:username
          response.writeHead(303, {"location": "/" + query.username});
          response.end();
        }); 
    }
  }    
}
  
//Handle HTTPS route for GET/:username i.e. /chalkers
function user(request, response) {
  //if url == "/..."
  var username = request.url.replace("/", "");
  if(username.length > 0) {
    response.writeHead(200, commonHeader);
    
    render.view('header', {}, response);
    
    //get json from Treehouse
    var studentProfile = new Profile(username);
    //on "end"
    studentProfile.on("end", function(profileJSON) {
      //show profile
      
      //Store values we need
      var values = {
        avatarUrl: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      }
      
      //Simple response
      render.view('profile', values, response);
      render.view('footer', {}, response);
      response.end();
    });

    //on "error"
    studentProfile.on("error", function(error) {
      //show error
      render.view('error', {errorMessage: error.message}, response);
      render.view('search', {}, response);
      render.view('footer', {}, response);
      response.end();
    });
  }
}

module.exports.home = home;
module.exports.user = user;
//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay">');
var $image = $("<img>");
var $caption = $("<p></p>");

//Add image to overlay
$overlay.append($image);

//Add caption ot overlay
$overlay.append($caption);

//Add overlay
$("body").append($overlay);

//Capture the click even on the link to an image.
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  
  //Show the overlay
  $overlay.show();
  
  //Display alt text as image caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

//Hide overlay When overlay is clicked
$overlay.click(function () {
  $overlay.hide();
})
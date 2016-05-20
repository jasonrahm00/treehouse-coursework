//Problem: User interaction does not cause change to application
//Solution: Add functionality to allow user interaction to the app and make drawing canvas work

var $canvas = $("canvas");
var color = $(".selected").css("background-color");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

//When clicking on control list items
$(".controls").on("click", "li", function() {
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  
  //Select $(this) clicked color
  $(this).addClass("selected");
  
  //Cache current color
  color = $(this).css("background-color");
});
  
//Update the new color span
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}

//When 'New Color' button is pressed
$("#revealColorSelect").click(function() {
  //Show or hide new color selection div
  changeColor();
  $("#colorSelect").toggle();
});

//When color sliders change
$("input[type=range]").change(changeColor);
  
//When 'Add Color' pressed
$("#addNewColor").click(function() {
  //Append color to the color selection controls
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  
  //Select new color
  $newColor.click();
});
  
//On mouse events on canvas
$canvas.mousedown(function(e) {
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e) {
  //Draw lines
  if(mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function() {
  mouseDown = false;
}).mouseleave(function() {
  $canvas.mouseup();
});
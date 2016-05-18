//Problem: Nav Bar looks gross in smaller browser widths (mobile)
//Solution: Hide text links and swap them out with more appropriate navigation

//Create a select element and append to the #menu
var $select = $("<select></select>");
$("#menu").append($select);

//Cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);
  
  //Create an option
  var $option = $("<option></option");
    
  //Deal with selected options depending on current page
  if($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);
  };
  
  //Option's value is the href of the link
  $option.val($anchor.attr("href"));
  
  //Option's text is the text of the link
  $option.text($anchor.text());
  
  //Append option to select element
  $select.append($option);
  
});

//Bind change listener to the select, so the page changes when a new item is 
$select.change(function() {
  //Go to select's location
  window.location = $select.val();
});
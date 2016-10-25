$(document).ready(function (){
  
  $('form').submit(function(evt){
    evt.preventDefault();
    var $searchField = $('#search');
    var $submitButton = $('#submit');
    
    $searchField.prop('disabled', true);
    $submitButton.attr('disabled', true).val('Searching...');
    var flickerAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
    var searchTerm = $searchField.val();
    var flickrOptions = {
      tags: searchTerm,
      format: "json"
    };
    
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items, function(index, photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML +=  '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src=' + photo.media.m + '></a></li>';
      });
      
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
      $searchField.prop('disabled', false);
      $submitButton.attr('disabled', false).val('Search');
      
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
  }); //End click method
  
}); //End jQuery ready
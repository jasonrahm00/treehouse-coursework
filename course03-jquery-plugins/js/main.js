$(".animsition").animsition({
  inClass: "fade-in-right-lg",
  outClass: "fade-out-right-lg",
  linkElement: "header a",
  inDuration: 1500,
  outDuration: 1000
});

$('.header').sticky();

$('.header')
  .on('sticky-start', function(){
    $('.description').html('We Build <strong>great</strong> apps');
  })
  .on('sticky-end', function() {
    $('.description').html('We Build apps');
});
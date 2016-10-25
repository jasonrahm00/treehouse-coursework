var playlist = new Playlist();

var svanire = new Song("Svanire", "Ludovico Einaudi", "7:15", "https://www.youtube.com/embed/naiu-of7J80");
var moonlightSonataFirst = new Song("Moonlight Sonata", "Beethoven (Mvt. 1)", "6:07", "https://www.youtube.com/embed/nT7_IZPHHb0");
var alwaysSanford = new Song("Always (Sanford Mix)", "Jessica Curry", "7:15", "https://www.youtube.com/embed/wl4I-LzL9BA");
var snowLight = new Song("Snow + Light", "Dustin O'Halloran", "6:34", "https://www.youtube.com/embed/9PlFL9FNeig");

playlist.add(svanire);
playlist.add(moonlightSonataFirst);
playlist.add(alwaysSanford);
playlist.add(snowLight);

var playlistElement = document.getElementById('playlist');
playlist.renderInElement(playlistElement);

var listItems = document.getElementsByTagName('li');

for(var i = 0; i < listItems.length; i++) {
  listItems[i].onclick = function() {
    playlist.chooseSong(this);
  }
}

$('li').click(function (){
  if(!($(this).hasClass('current'))) {
    $('li').removeClass('current');
    $(this).addClass('current');
  }
});
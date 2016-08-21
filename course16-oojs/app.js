var playlist = new Playlist();

var svanire = new Song("Svanire", "Ludovico Einaudi", "7:15");
var moonlightSonataFirst = new Song("Moonlight Sonata", "Beethoven (1st Movement)", "6:07");
var alwaysSanford = new Song("Always (Sanford Mix)", "Jessica Curry", "7:15");
var snowLight = new Song("Snow + Light", "Dustin O'Halloran", "6:34");

playlist.add(svanire);
playlist.add(moonlightSonataFirst);
playlist.add(alwaysSanford);
playlist.add(snowLight);

var playlistElement = document.getElementById('playlist');

playlist.renderInElement(playlistElement);

var playButton = document.getElementById('play');
playButton.onclick = function() {
  playlist.play();
  playlist.renderInElement(playlistElement);
}

var nextButton = document.getElementById('next');
nextButton.onclick = function() {
  playlist.next();
  playlist.renderInElement(playlistElement);
}

var stopButton = document.getElementById('stop');
stopButton.onclick = function() {
  playlist.stop();
  playlist.renderInElement(playlistElement);
}


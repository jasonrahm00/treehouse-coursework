function Playlist() {
  this.songs = [];
  this.nowPlayingIndex = 0;
  this.chosenSongIndex = null;
}

Playlist.prototype.add = function(song) {
  this.songs.push(song);
};

Playlist.prototype.renderInElement = function(list) {
  var itemIndex = 0;
  list.innerHTML = "";
  for(var i = 0; i < this.songs.length; i++) {
    list.innerHTML += this.songs[i].toHTML(itemIndex);
    itemIndex++;
  }
};

Playlist.prototype.addVideo = function(a, b) {
  a.innerHTML = b.videoHtml();
}

Playlist.prototype.chooseSong = function(a) {
  var songIndex = a.getAttribute('id');
  var videoElement = document.getElementById('videoWrapper');
  if(songIndex != this.chosenSongIndex) {
    this.chosenSongIndex = songIndex;
    var chosenSong = this.songs[songIndex];
    chosenSong.chose();
    this.addVideo(videoElement, chosenSong);
  } else {
    console.log('Song already chosen');
  }
}
function Song(title, artist, duration, embed) {
  this.title = title;
  this.artist = artist;
  this.duration = duration;
  this.embed = embed;
  this.isChosen = false;
}

Song.prototype.chose = function() {
  this.isChosen = true;
}

Song.prototype.toHTML = function(a) {
  var htmlString = '<li';
  htmlString += ' id="';
  htmlString += a;
  htmlString += '">';
  htmlString += this.title; 
  htmlString += ' - ';
  htmlString += this.artist;
  htmlString += '<span class="duration">';
  htmlString += this.duration;
  htmlString += '</span></li>';
  return htmlString;
};

Song.prototype.videoHtml = function() {
  var videoCode = '<iframe src="';
  videoCode += this.embed;
  videoCode += '" frameborder="0" allowfullscreen></iframe>';
  return videoCode;
}
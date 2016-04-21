var playList = [
  ['Free Bird', 'Lynyrd Skynyrd'],
  ['Beautiful People', 'Marilyn Manson'],
  ['Coma White', 'Marilyn Manson'],
  ['Tainted Love', 'Marilyn Manson'],
  ['Sweet Child O\' Mine', 'Guns N\' Roses'],
  ['When The Levee Breaks', 'Led Zepplin']
]

function print(message) {
  document.write(message);
}

function printSongs( songs ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < songs.length; i += 1) {
    listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}
printSongs(playList);
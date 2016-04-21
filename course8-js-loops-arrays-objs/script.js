var playList = [
  'Free Bird',
  'Beautiful People',
  'Coma White',
  'Tainted Love',
  'Sweet Child O\' Mine',
  'When The Levee Breaks'
]

function print(message) {
  document.write(message);
}

function printList( list ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < list.length; i += 1) {
    listHTML += '<li>' + list[i] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}
printList(playList);
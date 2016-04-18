var rgbColor, html = '';

// Generates random RGB color
function getRGB() {
  return Math.floor(Math.random() * 256);
}

// Creates a CSS rgb string by calling the getRGB function when each number is needed
function randomColor() {
  return 'rgb(' + getRGB() + ',' + getRGB() + ',' + getRGB() + ')';
}

function print(message) {
  document.write(message);
}

// Generates 10 divs with random colurs by calling randomColor function and placing the RGB value in the style tag of the newly created div
for (var i = 0; i < 10; i += 1) {
  rgbColor = randomColor();
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

print(html);
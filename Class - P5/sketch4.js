var img;  // Declare variable 'img'.

function setup() {
  createCanvas(720, 400);
  img = loadImage("black_hills.jpg");  // Load the image
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  // Displays the image at point (0, height/2) at half size
  image(img, 0, height/2, img.width/2, img.height/2);
}
// Move the mouse across the canvas to leave a trail
function setup() {
  createCanvas(600,600);
	strokeWeight(10)
	stroke(0);
  //slow down the frameRate to make it more visible
  frameRate(10);
}

function draw() {
  background(244, 248, 252);
  line(mouseX, mouseY, pmouseX, pmouseY);
  print(pmouseX + " -> " + mouseX);
}
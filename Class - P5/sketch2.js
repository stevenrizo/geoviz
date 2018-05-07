
 function setup() {
 	createCanvas(600,600);
	strokeWeight(10)
	stroke(0);
}

function draw() {
	line(100,100,400,400);
}

function mousePressed() {
  ellipse(mouseX, mouseY, 50,50);
  
}
// Click within the image to change
// the value of the rectangle
// after the mouse has been clicked

function setup(){
    createCanvas(400,400);  
}


var px = 50;
var py = 50;

function draw() {
   background(200);
  
   ellipse(px, py, 20,20);
}

function mousePressed() {
    px = mouseX;
    py = mouseY;
    
}
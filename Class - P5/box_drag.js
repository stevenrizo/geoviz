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
   px = lerp(px,mouseX,0.05);
   py = lerp(py,mouseY,0.05);
  
   rect(25, 25, px, py);
}

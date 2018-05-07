// This p5.js code creates a polygon,
// allowing the user to mouse-over the corners (vertices) and
// click and drag corners to a new location. A CornerVertex
// object is create for each corner and one associated line segment that
// connects corners of the polygon.
// C. Connor, August, 2016

//create an array of corner objects
var corner = [];

//location of corner object
//these are global so mouse state can be checked
var x = [];
var y = [];

//number of corner objects
var num_corners;

//size of corner box
var boxSize = 5;

//keep track of mouse state for each corner object
//these are global so mouse state can be checked
var locked = [];
var overBox = [];

// i indexes corner objects
// this are global so mouse state can be checked
var i;

function setup() {
  createCanvas(640, 480);
  noStroke();

  rectMode(RADIUS);

//specify number and location of polygon corners
 num_corners = 4;
 x[1] = 300;
 y[1] = 100;
 x[2] = 500;
 y[2] = 200;
 x[3] = 300;
 y[3] = 400;
 x[4] = 100;
 y[4] = 200;

//create corner objects and initialize mouse state for each corner
for (i=1; i<num_corners+1;i++) {
  corner[i] = new CornerVertex();
  overBox[i] = false;
  locked[i] = false;
}
}

function draw() {
  background(51);

//check each corner for movement and redraw
for (i=1; i<num_corners+1;i++) {
  corner[i].move();
  corner[i].display();
}
}

//the CornerVertex object
function CornerVertex() {


this.move = function(){
  // Test if the cursor is over the box 
  
  if (mouseX > x[i] - boxSize && mouseX < x[i] + boxSize &&
    mouseY > y[i] - boxSize && mouseY < y[i] + boxSize) {
    overBox[i] = true;
    
    if (!locked[i]) {
      stroke(255);
      fill(153);
     
    }
  } else {
    stroke(153);
    fill(153);
    overBox[i] = false;
  }
}

this.display = function () {
  // Draw the corner box and connecting line
  rect(x[i], y[i], boxSize, boxSize);
  if (i == num_corners) {
       line(x[num_corners], y[num_corners], x[1], y[1]);
     }else{
       line(x[i], y[i], x[i+1], y[i+1]);
   }

 
}

}


function mousePressed() {

//check the state f each corner, highlight slected corner
for (i=1; i<num_corners+1;i++) {
  if (overBox[i]) {
    locked[i] = true;
    fill(255, 255, 255);
    
  } else {
    locked[i] = false;
  }
 
}
}

function mouseDragged() {

//drag the selected corner and update x,y
for (i=1; i<num_corners+1;i++) {
  if (locked[i]) {
   x[i] = mouseX;
   y[i] = mouseY;
 
  }
}
}

function mouseReleased() {
//no corner selected on mouse release
for (i=1; i<num_corners+1;i++) {
  locked[i] = false;
}
}


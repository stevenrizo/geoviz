// constants for left side of lava flow
var left,
    right,
    maxHeight = 305,
    minHeight = 200,
    over = false,
    move = false;

// initial depth of left hand of lava flow
var height = 400;
var width = 700;
var ps = 200;

function setup() {
  createCanvas(700, 400);
  rectMode(CORNERS);
  noStroke();
  left = 0;
  right = width/2;
}

function draw() {
  background(102);
  updateLava();
  drawLava();
}

function drawLava() {
  // Draw base
  fill(0.2);
//  rect(width/2, height/2+50, width, height/2);
  rect(width/2,height/2+50,width, height/2);
  // Set color and draw top bar
  if (over || move) {
    fill(255);
  } else {
    fill(200);
  }

  rect(0,ps,width/2,ps+50);
}

function updateLava() {
  // Update the spring position
  if ( !move ) {
    //draw anomaly
  }


  // Test if mouse if over the top bar
  if (mouseX > left && mouseX < right && mouseY > ps && mouseY < ps + 50) {
    over = true;
  } else {
    over = false;
  }

  // Set and constrain the position of top bar
  if (move) {
    ps = mouseY;
    ps = constrain(ps, minHeight, maxHeight);
  }
}

function mousePressed() {
  if (over) {
    move = true;
  }
}

function mouseReleased() {
  move = false;
}
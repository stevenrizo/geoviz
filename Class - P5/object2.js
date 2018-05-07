var rock1;  // Declare object
var rock2;
var rock3;
var rock4;
var rock5;

function setup() {
  createCanvas(710, 400);
  // Create object
  rock1 = new Drop();
  rock2 = new Drop();
  rock3 = new Drop();
  rock4 = new Drop();
  rock5 = new Drop();
}

function draw() {
  background(50, 89, 100);
  rock1.move();
  rock1.display();
    rock2.move();
  rock2.display();
    rock3.move();
  rock3.display();
    rock4.move();
  rock4.display();
    rock5.move();
  rock5.display();
}

// Drop class
function Drop() {
  this.x = random(width/8);
  this.y = random(height/4);
  this.diameter = random(5, 10);
  this.xspeed = 0.25;
  this.yspeed = this.diameter/5;

  this.move = function() {
      if (this.y < height-this.diameter/2) {
         this.y += this.yspeed;
         this.x += this.xspeed;  
      }
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
};

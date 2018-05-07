var rock = [];  // Declare object
var n = 500;

function setup() {
  createCanvas(710, 400);
  // Create object
  for (i = 0; i < n; i++) {
    rock.push(new Drop());      
  }
}

function draw() {
  background(50, 89, 100);
  for (i = 0; i < rock.length; i++) {
      rock[i].move();
      rock[i].display();
  }
}

// Drop class
function Drop() {
  this.x = random(width/8);
  this.y = random(height/4);
  this.diameter = random(5, 10);
  this.xspeed = 1;
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

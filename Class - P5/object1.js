var rock;  // Declare object

function setup() {
  createCanvas(710, 400);
  // Create object
  rock = new Drop();
}

function draw() {
  background(50, 89, 100);
  rock.move();
  rock.display();
}

// drop class
function Drop() {
  this.x = random(width/4);
  this.y = random(height/4);
  this.diameter = random(10, 20);
  this.xspeed = 0.25;
  this.yspeed = 0.5;

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

function setup() {
  createCanvas(720, 400);
}

function draw() {
  // Set the background to black and turn off the fill color
  background(0);
  noFill();

  // The two parameters of the point() method each specify 
  // coordinates.
  // The first parameter is the x-coordinate and the second is the Y 
  stroke(255);
  point(width * 0.5, height * 0.5);
  point(width * 0.5, height * 0.25); 

  // Coordinates are used for drawing all shapes, not just points.
  // Parameters for different functions are used for different 
  // purposes. For example, the first two parameters to line()  
  // specify the coordinates of the first endpoint and the second  
  // two parameters specify the second endpoint
  stroke(0, 153, 255);
  line(0, height*0.33, width, height*0.33);
}

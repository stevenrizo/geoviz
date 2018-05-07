//set variables
var radius = 10;
var circles = [
    { x: 100, y: 200, color: '#000', active: false },
	{ x: 200, y: 200, color: '#000', active: false },
	{ x: 300, y: 200, color: '#000', active: false },
    { x: 400, y: 200, color: '#000', active: false },
    { x: 500, y: 200, color: '#000', active: false },
    { x: 600, y: 200, color: '#000', active: false }
];



//create initial canvas and objects
function setup() {
    //determine canvas size
    createCanvas(700,400);
    //set ellipse size to radius rather than diameter
    ellipseMode(RADIUS);
}

// Draw on the canvas.
function draw() {
    //create background fill
	background(200);
    
    //create a variable for each circle
    var c1 = circles[0];
    var c2 = circles[1];
    var c3 = circles[2];
    var c4 = circles[3];
    var c5 = circles[4];
    var c6 = circles[5];

    //calculate average height
    var Average = (c1.y + c2.y + c3.y + c4.y + c5.y + c6.y)/6;

    //calculate individual slopes
    var slope1 = (c1.y - c2.y)/100;
    var slope2 = (c2.y - c3.y)/100;
    var slope3 = (c3.y - c4.y)/100;
    var slope4 = (c4.y - c5.y)/100;
    var slope5 = (c5.y - c6.y)/100;

    //calculate average slope
    var slopeAverage = (slope1 + slope2 + slope3 + slope4 + slope5)/5;

    //set coordinaates for slope line
    var x1 = 0;
    var x2 = 700;
    var y1 = Average + slopeAverage * 350;
    var y2 = Average - slopeAverage * 350;
    
    console.log(Average, slopeAverage, x1,y1,x2,y2);
    //draw slope line
    line(x1,y1,x2,y2);
    
    //create circles from array
	if (circles.length > 0) {
		for (var i = 0; i < circles.length; i++) {
			var circle = circles[i];
			fill(circle.color);
			ellipse(circle.x, circle.y, radius);
            
		}
	}    
    
}

// Run when the mouse/touch is down.
function mousePressed() {
    //check if mouse is pressed inside circle
	if (circles.length > 0) {
		for (var i = 0; i < circles.length; i++) {
			var circle = circles[i],
					distance = dist(mouseX, mouseY, circle.x, circle.y);
    			if (distance < radius) {
				circle.active = true;
			} else {
				circle.active = false;
			}
		}
	}
  // Prevent default functionality.
  return false;
}

// Run when the mouse/touch is dragging.
function mouseDragged() {
    //move circle vertically when mouse is dragging
	if (circles.length > 0) {
		for (var i = 0; i < circles.length; i++) {
			var circle = circles[i];
			if (circle.active) {
                if (mouseY > radius && mouseY < 400 - radius)
				circle.y = mouseY;
				break;
			}
		}
	}
  // Prevent default functionality.
  return false;
}


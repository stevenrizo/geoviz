//create variables
var x, y, r, vx, vy;

//create canvas and set initial variables
function setup() {
    createCanvas(600, 400);
    r = 25;
    x = width/2;
    y = r;
    vy = 1;
    vx = 1;
}

function draw() {
    background(70, 50, 0);
    
    //draw ellipse
    ellipse(x, y, 2*r, 2*r);
    
    //move ellipse
    x = x + vx;
    y = y + vy;
    
    //change direction at "right" or "left"
    if (x > width - r || x < r) {
        vx = -vx;
    }
    
    //change direction at "bottom" or "top"
    if (y > height - r || y < r) {
        vy = -vy;
    }
    
}

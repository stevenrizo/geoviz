var r = 5;
var spacing = 50;


function setup() {
    createCanvas(500,500);
    noFill();
    stroke(255);

}

function draw() {
    background(100);
    ellipse(mouseX, mouseY, 2*r);
    fill(255);
    var countX = ceil(width/spacing) + 1;
    var countY = ceil(height/spacing) + 1;
    var mag = 0;
    
    for (var i = 0.5; i < countX; i++) {
        for (var j = 0.5; j < countY; j++) {
            var xdot = i*spacing;
            var ydot = j*spacing;
            var mag = magF(xdot,ydot,mouseX,mouseY);
            var xcoor = xcomp(mag, xdot, ydot, mouseX, mouseY);
            var ycoor = ycomp(mag, xdot, ydot, mouseX, mouseY);
            line(xdot, ydot, xcoor, ycoor);
        }
    }
}

function xcomp (mag, x1, y1, x2, y2) {
        var v = dist(x1,y1,x2,y2);
        var icomp = mag*(x1-x2)/v;
        var xcoor = (x1+icomp); 
        return xcoor;
}

function ycomp (mag, x1, y1, x2, y2) {
        var v = dist(x1,y1,x2,y2);
        var jcomp = mag*(y1-y2)/v;
        var ycoor = (y1+jcomp); 
        return ycoor;   
}

function magF (x1, y1, x2, y2) {
    var m1 = 1000/dist(x1,y1,x2,y2);
    if (m1 > spacing) {m1 = spacing;}
    return m1;
}


function setup() {
  createCanvas(400,400);
  
  stroke(255);
}

function draw() {
  background(100);
  var mag = 10;
  var gspacing = 20;
  var countX = ceil(width/gspacing) + 1;
  var countY = ceil(height/gspacing) + 1;
  ellipse(mouseX, mouseY, 10,10);
    
    
    for (var i = 0; i < countX; i++) {
        for (var j = 0; j < countY; j++) {
        var x1 = i*gspacing;
        var y1 = j*gspacing; 
        var mag = mag_fun(x1, y1, mouseX,mouseY);
        var xcoor = xcomp(mag, x1, y1, mouseX,mouseY);
        var ycoor = ycomp(mag, x1, y1, mouseX,mouseY);
        
        line     (x1, 
                  y1,
                  xcoor,
                  ycoor);
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

function mag_fun (x1, y1, x2, y2) {
    var m1 = 1000/dist(x1,y1,x2,y2);
    if (m1 > 50) {m1 = 50;}
    return m1;
}
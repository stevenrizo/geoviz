

function setup() {
  createCanvas(400,400);
  
  stroke(255);
}

  
function draw() {
  background(100);
  var gspacing = 40;
  var countX = ceil(width/gspacing) + 1;
  var countY = ceil(height/gspacing) + 1;
  ellipse(mouseX, mouseY, 10,10);
    
    
    for (var i = 0; i < countX; i++) {
        for (var j = 0; j < countY; j++) {
        var x1 = i*gspacing;
        var y1 = j*gspacing;
        var x2 = mouseX;
        var y2 = mouseY;
        var v = dist(x1,y1,x2,y2);
        var icomp = 10*(x1-x2)/v;
        var jcomp = 10*(y1-y2)/v;
        var xcoor = (x1+icomp);
        var ycoor = (y1+jcomp);    
        line      (x1, 
                  y1,
                  xcoor,
                  ycoor);
        }
    }
}



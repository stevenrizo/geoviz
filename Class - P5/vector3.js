

function setup() {
  createCanvas(400,400);
  
  stroke(255);
}

  
function draw() {
  background(100);
  var gspacing = 40;
  var countX = ceil(width/gspacing) + 1;
  var countY = ceil(height/gspacing) + 1;
  var mag1 = 10;
  ellipse(mouseX, mouseY, 10,10);
    
    
    for (var i = 0; i < countX; i++) {
        for (var j = 0; j < countY; j++) {
        mag1 = 1000/dist(mouseX,mouseY,i*gspacing,j*gspacing); 
        if (mag1 > 50) {mag1 = 50;}
         ellipse(i*gspacing, 
                  j*gspacing,
                  mag1,
                  mag1);
        }
    }
}



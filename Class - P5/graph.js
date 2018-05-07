var xmin = -4.0*3.14159;
var xmax = 4.0*3.14159;
var ymin = -2.0;
var ymax = 2.0;
var tot_points = 100;

var xlabel = "x";
var ylabel = "y";

var xtics = [-10,-5,0,5,10];
var ytics = [-1.5,0,1.5];

var aSlider;

function setup() {
  createCanvas(600, 400);
  aSlider = createSlider(2, 10, 2);
  aSlider.position(width-width*0.3, height - height*0.9);
  
}

function draw() {
  background(102);
  drawgraph();
  draw_axes();    
  draw_label_axes ();
  draw_ticks();
  text("a", width-width*0.2, height - height*0.8);
  text("2", width-width*0.3, height - height*0.925);
  text("10", width-width*0.075, height - height*0.925);
}

function drawgraph() {
  var x,y, x_graph, y_graph;
  var xpadding = width/10.0;
  var ypadding = height/10.0;
  var x_graph_min = 2*xpadding;
  var x_graph_max = width - xpadding;
  var y_graph_max = ypadding;
  var y_graph_min = height-ypadding;    
  
  for (var i=0; i<tot_points; i++) {   
      x = xmin + i*(xmax-xmin)/tot_points;
      x_graph = x_graph_min - xmin*(x_graph_max - x_graph_min)/(xmax-xmin) + x*(x_graph_max - x_graph_min)/(xmax-xmin);  //xposition in screen units 
      y_graph = y_graph_min - ymin*(y_graph_max - y_graph_min)/(ymax-ymin) - curve_func(x) * ((y_graph_min - y_graph_max)/(ymax-ymin)); 
      ellipse(x_graph, y_graph, 5,5);
  }
}


function draw_axes() {
  var x_xaxis_padding = width/9.0;
  var y_xaxis_padding = height/10.0;
 
  var x_yaxis_padding = width/12.0;
  var y_yaxis_padding = height/5.0;
    
  var x_graph_min = 2*x_xaxis_padding;
  var x_graph_max = width - x_xaxis_padding;
  var y_graph_max = y_xaxis_padding;
  var y_graph_min = height-y_xaxis_padding;  
  
  stroke(255);   
  line(x_graph_min, y_graph_min, x_graph_max, y_graph_min);   
    
  var x_graph_min = 2*x_yaxis_padding;
  var x_graph_max = width - x_yaxis_padding;
  var y_graph_max = y_yaxis_padding;
  var y_graph_min = height-y_yaxis_padding;    
  line(x_graph_min, y_graph_min, x_graph_min, y_graph_max);      
} 

function draw_ticks (){
    
  var x,y, x_graph, y_graph;
  var xpadding = width/12.0;
  var ypadding = height/10.0;
  var x_graph_min = 2*xpadding;
  var x_graph_max = width - xpadding;
  var y_graph_max = ypadding;
  var y_graph_min = height-ypadding;    
  
  for (var i=0; i<xtics.length; i++) {   
      x = xtics[i];
      x_graph = x_graph_min - xmin*(x_graph_max - x_graph_min)/(xmax-xmin) + x*(x_graph_max - x_graph_min)/(xmax-xmin);  //xposition in screen units 
      line(x_graph, y_graph_min, x_graph,y_graph_min-10);
  }
    
  var x_graph_min = 2*xpadding;
  var x_graph_max = width - xpadding;
  var y_graph_max = ypadding;
  var y_graph_min = height-ypadding;  
    
    for (var i=0; i<ytics.length; i++) {   
     y =ytics[i];
     y_graph = y_graph_min - ymin*(y_graph_max - y_graph_min)/(ymax-ymin) - y * ((y_graph_min - y_graph_max)/(ymax-ymin)); 
     
      line(x_graph_min, y_graph, x_graph_min+10,y_graph);
  }
}
function draw_label_axes () {
    
  var x_xaxis_padding = width/9.0;
  var y_xaxis_padding = height/10.0;
  
  var x_yaxis_padding = width/12.0;
  var y_yaxis_padding = height/5.0;
    
  var x_graph_min = 2*x_xaxis_padding;
  var x_graph_max = width - x_xaxis_padding;
  var y_graph_max = y_xaxis_padding;
  var y_graph_min = height-y_xaxis_padding;  

  var x_xlabel_loc = x_graph_min + (x_graph_max-x_graph_min)/2.0;
  var y_xlabel_loc = (y_graph_min + 2.0*y_xaxis_padding/3.0);    
  textSize(18);
  textAlign(CENTER);
  fill(255);
  text(xlabel, x_xlabel_loc, y_xlabel_loc);
  
  var x_graph_min = 2*x_yaxis_padding;
  var x_graph_max = width - x_yaxis_padding;
  var y_graph_max = y_yaxis_padding;
  var y_graph_min = height-y_yaxis_padding;
    
  var x_ylabel_loc = x_graph_min - 2.0*x_xaxis_padding/3.0;
  var y_ylabel_loc = y_graph_min + (y_graph_max-y_graph_min)/2.0;    
  textSize(18);
  textAlign(CENTER);
  fill(255);
  text(ylabel, x_ylabel_loc, y_ylabel_loc);
}

function curve_func (x) {
    var a = aSlider.value();
    y = sin(2/(a) * x);
    return y;
}
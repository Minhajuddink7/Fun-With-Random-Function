function setup() {
  // put setup code here
var x;

createCanvas(800,600);


background(100);
}


function draw() {
  // put drawing code here

var x=random(0,width);
var y=random(0,height);
var r=random(0,255);
var g=random(0,255);
var b=random(0,255);
var s=random(10,40);
fill(r,g,b,100);
noStroke();
ellipse(x,y,s,s);

} 
function mousePressed(){
var r=random(0,255);
var g=random(0,255);
var b=random(0,255);
background(r,g,b);
}

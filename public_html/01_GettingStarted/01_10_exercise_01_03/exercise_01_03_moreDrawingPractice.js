/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function setup(){
createCanvas(800,800);
background(50,220,150); //green-ish background
line(0,400,800,400); //horizontal line
line(400,0,400,800); //horizontal line
noStroke();
fill(0); //black
rect(100, 100, 200, 200); //top left square
triangle(100, 100, 300, 100, 200, 50); //top left square
fill(255); //white
rect(100, 500, 200, 200); //bottom left square
triangle(100, 700, 300, 700, 200, 750); //bottom left triangle
fill(255,0,0); //red
rect(500, 100, 200, 200); //top right square
triangle(500, 100, 700, 100, 600, 50); //top right triangle
fill(0,0,255); //blue
rect(500, 500, 200, 200); //bottom right square
triangle(500, 700, 700, 700, 600, 750); //bottom right triangle
stroke(0); //black outline
noFill(); //no fill colour
ellipse(400,400, 800, 200); //large ellipse
ellipse(400, 400, 200, 200); //large middle circle
ellipse(400, 400, 100, 100); //small middle circle
}

/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function setup(){
createCanvas(400,400);
background(50,220,150); //green-ish background
line(0,200,400,200); //horizontal line
line(200,0,200,400); //vertical line
noStroke();
fill(0); //black
rect(50, 50, 100, 100); //top left square
triangle(50, 50, 150, 50, 100, 25); //top left square
fill(255); //white
rect(50, 250, 100, 100); //bottom left square
triangle(50, 350, 150, 350, 100, 375); //bottom left triangle
fill(255,0,0); //red
rect(250, 50, 100, 100); //top right square
triangle(250, 50, 350, 50, 300, 25); //top right triangle
fill(0,0,255); //blue
rect(250, 250, 100, 100); //bottom right square
triangle(250, 350, 350, 350, 300, 375); //bottom right triangle
stroke(0); //black outline
noFill(); //no fill colour
ellipse(200,200, 400, 400); //large ellipse
ellipse(200, 200, 100, 100);//large middle circle
ellipse(200, 200, 50, 50); //small middle circle
}

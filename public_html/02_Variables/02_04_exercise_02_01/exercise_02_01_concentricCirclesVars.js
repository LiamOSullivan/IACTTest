/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/

/**************************************
 * Concentric Circles with Variables
 ***************************************


Draws 6 concentric circles. Variables are 
used to store the center position, rather 
than 'hard coding' the values as args.
The positions of the circles 
can be changed more easily by 
changing the values of the variables.

Liam O'Sullivan - lmosulli@tcd.ie

*/

var xPosition = 200; //variable for x coordinate of circles, as they are concentric
var yPosition = 200; //variable for y coordinate


function setup(){
    createCanvas(400,400);
background(0);
fill(0);
stroke(255);
ellipse(xPosition,yPosition, 400,400); //use the variables as arguments
ellipse(xPosition,yPosition, 300,300);
ellipse(xPosition,yPosition, 200,200);
ellipse(xPosition,yPosition, 100,100);
}

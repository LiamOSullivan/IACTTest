/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/

var xPosition = 200; //variable for x coordinate of circles, as they are concentric
var yPosition = 200; //variable for y coordinate

function setup() {
    createCanvas(400, 400);
    background(0);
    fill(0);
    stroke(255);
    ellipse(xPosition, yPosition, 400, 400); //use the variables as arguments
    ellipse(xPosition, yPosition, 300, 300);
    ellipse(xPosition, yPosition, 200, 200);
    ellipse(xPosition, yPosition, 100, 100);
}

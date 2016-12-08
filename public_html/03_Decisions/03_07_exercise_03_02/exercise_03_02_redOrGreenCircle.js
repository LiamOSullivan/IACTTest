/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function setup() {
    createCanvas(400, 400); //Set the display size
    background(255);
//Declare a variable to hold the value of the x-position of the cirecle.
//Generate a random number between 0 and width and assign this value to the variable. 
    var xPosition = random(0, width);

//Set up a if-else statement and choose a fill colour based on the value of xPosition.
//If xPosition is greater than width/2, it will be drawn to the right hand side of the display.
    if (xPosition > width / 2) { //Check if the x co-ordinate is on the right hand side of the display
        fill(0, 255, 0);  //Fill with green
    }
    else {
        fill(255, 0, 0); //Fill with red
    }
    //Draw a line down the middle of the canvas, where x = width/2
    line(width/2, 0,width/2,height);
    //Draw the circle, using the x position variable
    ellipse(xPosition, height / 2, 50, 50);

}


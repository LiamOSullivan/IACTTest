/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
var circleX; //we need the variable for the x-position to have global scope,
//so that it may be modified from within the setup() and draw() loop functions.
//Therefore, we declare it at the top of the sketch.
var speed; //this is the number of pixels the circle will move every frame
function setup() {
    createCanvas(400, 400);
    background(0);
    frameRate(25); //framerate controls how many times per second that the draw() loop iterates.
    circleX = 0; //The circleX variable is initialised once, when setup runs.
    speed = 5; //the amount to increment the posiiton of the shape each frame.

}

function draw() {
    background(0); //redrawing the background means that the previous circle will be erased before
    //the new one is drawn. Comment out this statement to see the effect of not redrawing the background.
    //circleX+=1; //increment the variable by 1 every frame, so the circle moves 1 pixel at a time
    circleX += speed; //increment the variable by speed
    ellipse(circleX, height / 2, 100, 100); //draw the cricle using the variable which increments

}

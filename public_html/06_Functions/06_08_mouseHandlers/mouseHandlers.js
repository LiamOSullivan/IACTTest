/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
var circleXPosition, circleYPosition, circleSize;
var colorValue;
function setup() {
    createCanvas(400, 400);
    frameRate(25);
    background(100, 100, 0);
    stroke(0);
    colorValue = 0;

    circleXPosition = width / 2; //set the initial circle position 
    circleYPosition = height / 2; //the center of the display
}

function draw() {
    background(100, 100, 0); //try commenting this out to see the effect
    fill(colorValue);
    ellipse(circleXPosition, circleYPosition, 100, 100);

}
function mousePressed() {
    circleXPosition = mouseX; //Use the clicked x mouse position as the circle horizontal coordinate
    circleYPosition = mouseY; //Use the clicked y mouse position as the circle vertical coordinate
  
}

function mouseDragged() {
    if (colorValue < 255) {
        colorValue += 1;
    }
    else {
        colorValue = 0;
    }
   
}
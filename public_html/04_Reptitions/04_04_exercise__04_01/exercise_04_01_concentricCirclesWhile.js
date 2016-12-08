/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function setup() {
    var xPosition; //variable for x coordinate of circles, as they are concentric
    var yPosition; //variable for y coordinate
    createCanvas(400, 400);
    xPosition = width / 2;
    yPosition = height / 2;
    background(0);
    fill(0);
    stroke(255);
    //must count downwards, to draw the bgger circles BEHIND the smnaller
    var counter = 4;
    while (counter > 0) {
        ellipse(xPosition, yPosition, 0.25 * counter * width, 0.25 * counter * width);
        counter -= 1;
    }
}


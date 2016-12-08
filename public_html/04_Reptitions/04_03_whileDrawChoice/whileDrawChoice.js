/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function setup() {
    createCanvas(400, 400);
    background(0);
    var xPosition = 0;
    line(width / 2, 0, width / 2, height);
    while (xPosition < width / 2) {
        //draw each subsequent circle 10 pixels to the right, but at a random vertical position
        ellipse(xPosition, random(height), 50, 50); 
        xPosition += 10;
    }
}


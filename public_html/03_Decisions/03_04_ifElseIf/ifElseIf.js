/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
var drawCircle = false;
var drawSquare = false;
function setup() {
    createCanvas(400, 400);
    background(0);
    fill(255);
    if (drawCircle) {
        ellipse(width / 2, height / 2, 100, 100);
    }
    else if (drawSquare) {
        rectMode(CENTER);
        rect(width / 2, height / 2, 100, 100);
    }
    else {
        stroke(255);
        line(0, height / 2, width, height / 2);
        line(width / 2, 0, width / 2, height);
    }

}


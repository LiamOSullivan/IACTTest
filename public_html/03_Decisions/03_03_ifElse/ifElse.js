/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
var drawCircle = false;
function setup() {
    createCanvas(400, 400);
    background(0);
    fill(255);
    println("drawCircle is: "+drawCircle);
    if (drawCircle) {
         println("Draw a circle");
        ellipse(width / 2, height / 2, 100, 100);
    }
    else{
        println("Draw a square");
        rectMode(CENTER);
        rect(width / 2, height / 2, 100, 100);
    }

}


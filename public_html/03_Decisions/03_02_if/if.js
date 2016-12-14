/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
var drawCircle = true;
function setup() {
    createCanvas(400, 400);
    background(0);
    fill(255);
    println("drawCircle is: "+drawCircle);
    if (drawCircle) {
        ellipse(width / 2, height / 2, 100, 100);
    }

}



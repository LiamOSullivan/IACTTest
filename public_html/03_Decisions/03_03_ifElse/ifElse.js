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
    if (drawCircle) {
        ellipse(width / 2, height / 2, 100, 100);
    }
    else{
        rect(width / 2, height / 2, 100, 100);
    }

}


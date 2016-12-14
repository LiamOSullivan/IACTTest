/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function setup() {
    var colorShapesRed = true;
    var addOutline = true;
    createCanvas(400, 400);
    background(0);
    println("colorShapesRed is: "+colorShapesRed);
    println("addOutline is: "+addOutline);
    //drawing defaults
    fill(255);
    strokeWeight(5);
    noStroke();
    //if both true use a red fill and a white outline
    if (colorShapesRed && addOutline) {
        stroke(255);
        fill(255, 0, 0);
    }
    //if a specifc one is true
    else if (colorShapesRed || addOutline) {
        if (!addOutline) {
            noStroke();
        }
        else {
            stroke(255);
        }

        if (colorShapesRed) {
            fill(255, 0, 0);
        }
        else{
            fill(0);
        }

    }
    //if both false
    else {
        //do nothinhg
    }
    ellipse(width / 2, height / 2, 100, 100);
}


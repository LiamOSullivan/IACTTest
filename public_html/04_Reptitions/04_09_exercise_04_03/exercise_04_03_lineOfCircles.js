/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function setup() {
    createCanvas(600, 400); //set the display to be a wider rectangle for a change
    background(0);  //black background
    fill(255);       //white fill colour
    ellipseMode(CORNER); //drawing the ellipse from the corner of the bounding box
    //will ensure we don't have half a circle on the left-hand side
//for loop to iterate 20 times...
    var step = width / 20;
    for (var i = 0; i < 20; i += 1) { //i is commonly used as the loop counter variable
        ellipse(step * i, height / 2, step, step);
        //by using width/20 we can space the circles equally across the screen
        //this 'step size' is multiplied by the loop counter variable, i.
        //if we resize the display, the sketch will be scaled proportionally
    }//remember to close the if statement curly braces!

}
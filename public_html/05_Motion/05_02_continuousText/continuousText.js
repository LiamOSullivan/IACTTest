/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
var counter = 0; //declaring counter as a global variable 

function setup() {
    createCanvas(400,400);
    background(0);
    fill(255);
    
}
function draw() {
    background(0); //redraw the background so repeated overlay of text is not visible
    counter += 1;
    text("Counter value is: " + counter, 100,width/2);
}


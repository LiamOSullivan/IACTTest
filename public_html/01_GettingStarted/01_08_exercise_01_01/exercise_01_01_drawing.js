/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function setup() {
    createCanvas(400, 400);
    background(0);
    stroke(255); //white outline
    strokeWeight(4);    //outline thickness
    fill(229, 39, 12);     //set a fill colour
    rectMode(CENTER);    // use the co-ordinates supplied to rect() as its center
    //We are going to draw a square to the window using another function: rect()
    //The rect() function takes the following arguments:
    //rect(x-position, y-position, horizontal size, vertical size)
    rect(200, 200, 200, 200); //draw the square
    fill(62, 212, 219);     //set a different fill colour
    stroke(0,0,200); //blue outline
    strokeWeight(10); //outline thickness
    ellipse(200, 200, 100, 100); //draw the circle
}
/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function setup() {
    createCanvas(400, 400); //call createCanvas() first, so that width and height are set 
    var sizeStep = width / 4; //divide the width by the number of circles  
    var xPosition = width / 2; //variable for x coordinate of circles, as they are concentric
    var yPosition = height / 2; //variable for y coordinate
    background(0);
    fill(0);
    stroke(255);
    //for-loop uses an initalisation, condition and increment
    //we declare the loop counter variable within the for-loop parentheses
    for (var count = 4; count > 0; count -= 1) {
        //the count variable goes from 4 to 1, so we can multiple it be the sizeStep to get the size of each circle
        //We 'count downwards' so that biggger circles are drawn earlier, 'behind' the smaller ones
        ellipse(xPosition, yPosition, count * sizeStep, count * sizeStep);
    }
}


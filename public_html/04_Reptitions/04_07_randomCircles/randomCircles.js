/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function setup() {
    createCanvas(400, 400);
    background(0);
//Declare 2 int variables to hold the values of the x and y positions of the circle being drawn
    var xPosition;
    var yPosition;

//For loop will iterate 20 times
    for (var count = 0; count < 20; count++) {
        xPosition = int(random(0, width)); //random() returns a floating point value, 
        //so we must place the whole random() call inside int() to convert the value generated to an integer 
        yPosition = int(random(0, height));
        ellipse(xPosition, yPosition, 50, 50); //use the randomly generated values to position the CURRENT circle
    }//remember to close the if statement curly braces!  

}

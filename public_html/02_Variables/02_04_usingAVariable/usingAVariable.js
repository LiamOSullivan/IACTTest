/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function setup() {
    createCanvas(400, 400);
    background(0);
    fill(255);
    var myVar = 50;
    // rectangle
    rect(myVar, myVar, 100, 40);
    //change the value of a variable, and the type of data it holds
    myVar = "Hello World!";
    // print a message using the variable value
    println(myVar);
    // display text on the canvas
    text(myVar, 50, 150); //The 2nd and 3rd arguments give the test position in pixels

}



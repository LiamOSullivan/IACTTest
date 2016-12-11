/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/

var number1, number2; //declare two variables
function setup() {
    createCanvas(400, 400);
    background(0);
    fill(255);
    //generate some random values for the variables and print them out
    number1 = int(random(0, 100));
    number2 = int(random(0, 100));
    textSize(25);
    text("Number 1 is " + number1, 50, 50);
    text("Number 2 is " + number2, 50, 150);

    if (checkIfLarger(number1, number2)) {
        text("Number 1 is larger!", 50, 250);
    } else {
        text("Number 2 is larger!", 50, 250);
    }
}
//Defining the function...
//A boolean value is returned if the first number is larger than the second, 
//It will accept two inputs, seperated by a comma
function checkIfLarger(in1, in2) {
    if (in1 > in2) {
        return true;
    } else {
        return false;
    }
}

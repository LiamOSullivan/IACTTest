/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/


var maximum = 50;
function setup() {
    createCanvas(400, 400);
    background(0);
    fill(255);
    //generate a random integer number
    var inputNumber = int(random(100));
    textSize(25);
    text("Input number is " + inputNumber, 50, 150);
    //call the sum function, providing the random integer as an arg
    var answer = sumFunction(inputNumber);
    //check if the function returns -1 or a valid answer and display text accordingly
    if (answer != -1) {
        text("Sum up to " + inputNumber + " is "+answer,50, 250); //print the answer
    } else {
        textSize(20);
        text("The input number entered is too big!", 25, 250); //print the answer
    }

}
function sumFunction(in1) {
    if (in1 > maximum) {
        return -1;
    } else {
        var sum = 0;
        for (var i = 0; i <= in1; i++) {
            sum += i;
        }
        return sum;
    }
}

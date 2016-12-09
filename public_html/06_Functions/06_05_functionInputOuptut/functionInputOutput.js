/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/



function setup() {
    createCanvas(400, 400);
    background(0);
    fill(255);
    //declare two variables and initialise with random values.
    var number1 = int(random(100)); // the int() function converts to integer representation 
    var number2 = int(random(100)); 
    text("Number 1 is " +number1+" and number 2 is "+number2, 50, 100); //display the answer
    //call the function and supply the numbers as input arguments
    var sum = addNumbers(number1, number2);
    text("Added together gives : " +sum, 50, 200); //display the answer

}
//Function definition
//It will return a value
//It will accept two inputs, so the parameters are declared as variables seperated by a comma
function addNumbers(in1, in2) {
    var ans = in1 + in2; //add the numbers passed into the function
    return ans; //return the answer as output
}
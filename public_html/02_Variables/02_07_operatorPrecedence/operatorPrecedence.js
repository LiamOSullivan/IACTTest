/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/

function setup() {
    var answer; //This variable will hold the answer
    answer = 5 * 2 + 3; //this will print the answer as 13 as 
//the multiplication will be evaluated before the addition
    println("Without brackets, the answer is: " + answer); //print the value of answer to the console
    answer = 5 * (2 + 3); //this will print the answer as 25 as
//the use of brackets forces the addition to be evaluated before
//the multiplication
    println("With brackets to enforce evalutaion order, the answer is: " + answer); //print the value of answer to the console
}



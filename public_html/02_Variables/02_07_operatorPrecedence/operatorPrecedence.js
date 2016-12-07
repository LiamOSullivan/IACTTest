/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
/**************************************
 Operator Precedence
*****************************************************
This sketch shows how we must take care when performing
mathematical operations using the arithmetic operators
which are + - / * %

We want to evaluate 5 * (2 + 3) (answer is 25)
*****************************************************

by Liam O'Sullivan: lmosulli@tcd.ie

*/
function setup(){
var answer; //This variable will hold the answer
answer = 5 * 2 + 3; //this will print the answer as 13 as 
//the multiplication will be evaluated before the addition
println("Without brackets, the answer is: "+answer); //print the value of answer to the console
answer = 5 * (2 + 3); //this will print the answer as 25 as
//the use of brackets forces the addition to be evaluated before
//the multiplication
println("With brackets to enforce evalutaion order, the answer is: "+answer); //print the value of answer to the console
}



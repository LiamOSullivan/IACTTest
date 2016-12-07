/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/

/**************************************
 Compound Arithmetic, Increment/Decrement and Assignment
*****************************************************

An example of how various math and assignment operators 
may be combined in a series of steps.

Note the use of many print statements throughout the code,
this allows us to check that each calculation is correct and,
in effect, allows us to 'debug' the code.

****************************************************/

function setup(){
var answer; //declare an integer variable
answer = 4; //answer is set to 4 here
println("After initialisation, the value of answer is: "+answer);
answer = answer+1;
println("After adding 1, the value of answer is: "+answer);
answer++; // answer is 5 here
println("After the increment, the answer is: "+answer);
answer -= 2; //answer = answer - 2; 
println("After decrement by 2, the answer is: "+answer);
answer =  answer + answer; //add current value of answer to itself
println("The final answer is: "+answer);
}
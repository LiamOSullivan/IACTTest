/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/

function setup() {
    var answer; //declare an integer variable
    answer = 4; //answer is set to 4 here
    println("After initialisation, the value of answer is: " + answer);
    answer = answer + 1;
    println("After adding 1, the value of answer is: " + answer);
    answer++; // answer is 5 here
    println("After the increment, the answer is: " + answer);
    answer -= 2; //answer = answer - 2; 
    println("After decrement by 2, the answer is: " + answer);
    answer = answer + answer; //add current value of answer to itself
    println("The final answer is: " + answer);
}
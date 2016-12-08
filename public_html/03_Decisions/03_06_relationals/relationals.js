/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
/**************************************
 Relational Operators
*****************************************************
How to use relational operators.

A relational expression is evaluated within a println() 
statement and printed out with a message.

*****************************************************/


function setup(){
//Enclose the relational expression in parentheses and add it to the printed message using the '+' sign...
println("5 is greater than 4 is "+(5>4)); 
println("5 is greater than or equal to 4 is "+(5>=4));
println("5 is less than 4 is "+(5<4));
println("5 is less than or equal to 5 is "+(5<=5));
println("5 is equal to 4 is "+(5==4));
println("5 is not equal to 4 is "+(5!=4));

//We can check if booleans are equal or not equal...
var value1=true;
var value2=false;
println("value1 is "+value1+" and value2 is "+value2); 
println("value1 is equal to value2 is "+(value1==value2));
println("value1 is not equal to value2 is "+(value1!=value2));
//...checking if one boolean is 'greater than' another also works!
println("value1 is greater than value2 is "+(value1>value2)); //true is said to be greater than false

//A common error is to try to use the assignment operator as a relational operator
println("Error: value1 is equal to value2 is "+(value2=value1)); //This ASSIGNS the value of value1 to the variable value2 giving the incorrect result.

//Using relational operators on characters also works:
var firstLetter = 'A'; //when assigning characters, we use single quotes.
println("The 1st letter is "+firstLetter);
var secondLetter = 'B';
println("The 2nd letter is "+secondLetter);
println("First letter == second letter is "+(firstLetter==secondLetter));

//We can also assign boolean values to variables in this way:
var result;
result = firstLetter!=secondLetter;  //note that the first '=' sign is an assignment, the second is part of a relational operation.
println("First letter != second letter is "+result);

    
    
}


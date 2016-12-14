/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/

//The 5 arithmetic operators are " * " " / " " + " " - " and " % "
function setup() {
    var result;

    result = 1 + 2.5; //add
    println("First result is: " + result);

    result = 100 / 6; //divide
    println("Result of division is: " + result);

    result = 3.14 * 100; //multiply
    println("Result of multiplication is: " + result);

    //we can, of course, treat variables like numbers:
    var num1 = 100;
    var num2 = 1.23;
    result = num1 * num2; //multiply thye values of the two variables
    println("Result of multipling variables is: " + result);
}

/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function setup() {
    var boxA = 10; //create a 'box' called a and write a value to it
    var boxB = 666; //create a 'box' called b and write a value to it

    print(boxA); //read the value from box a and print it out - NOTICE NO DOUBLE QUOTES
    print(boxB);

    print("The value in boxA is: " + boxA); //read the value from box a and print it out with a message as preamble
    print("The value in boxB is: " + boxB);

    boxA = -1234;
    boxB = 5678;

    print("The value in Box A has changed to: " + boxA); //read the current value from box a and print it out with a message as preamble
    print("The value in Box B has changed to: " + boxB);

    boxA = boxB; //take the value from boxB and put it in BoxA

    print("The value in Box A has changed again, to: " + boxA);
    print("The value in Box B has now changed to: " + boxB);

}

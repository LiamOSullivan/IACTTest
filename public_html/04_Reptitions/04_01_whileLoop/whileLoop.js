/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function setup() {
    var counter = 0; //declare a int variable to be used as a loop counter, set initial value to 0

// (counter<20) will evaluate to true or false
    while (counter < 20) {
        println("This is line #"+(counter)); //print a message and the current counter value, 
        counter++; //we must increment the counter variable, or we would never see (counter<6) go false and would be stuck in an INFINITE LOOP
    }

}

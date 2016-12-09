/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function setup() {
    for (var count = 0; count < 100; count++) {
        println("This is For-Loop iteration #" + count);
        //the print statement prints out the value of the count variable at each loop iteration.
        //we have declared the count variable within the loop header, but within the loop it is treated 
        //as any other variable. We can access it, but be careful that it is not modified (e.g.
        //incremented) in a way which will cause the loop to work in an unexpected way.
    }//remember to close the For-Loop curly braces!

}



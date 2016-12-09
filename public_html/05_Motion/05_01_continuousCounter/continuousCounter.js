/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
var counter = 0; //declaring counter as a global variable 
//it will be available in all code clocks

//setup is called once when the sketch is run
function setup() {
    counter += 1;
    println("In setup, counter value is: " + counter);
}
//draw is called repeatedly as the sketch is running
function draw() {
    counter += 1;
    println("In draw, counter value is: " + counter);
}

//println("After draw, counter value is: "+counter); 
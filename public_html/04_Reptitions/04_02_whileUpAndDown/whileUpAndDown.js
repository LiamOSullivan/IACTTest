/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function setup(){
    var counter=0;
    
    while (counter < 100) {
        println("Counting up in fives: "+counter); //print a message and the current counter value
        counter+=5; //increment the counter variable by 5 each loop
    }
    println("After the 1st loop, the value of counter is "+counter);
    
    while (counter > 0) {
        println("Counting down in tens: "+counter); 
        counter-=10; //decrement the counter variable by 10 each loop
    }
    println("After the 2nd loop, the value of counter is "+counter);
    
}


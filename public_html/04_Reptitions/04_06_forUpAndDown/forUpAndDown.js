/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function setup() {
    for (var count = 0; count < 100; count+=10) {
        println("For-Loop going UP in tens:"+count);
    }
    //as the count variable has local scope to the loop above, the name can be reused below
    //note that it is initialised to a new value- the last value from the loop above does not carry forward
    for (var count = 50; count > 0; count-=5) {
        println("For-Loop going DOWN in fives:"+count);
    }
//println(The value of count after the loops is"+count);

}


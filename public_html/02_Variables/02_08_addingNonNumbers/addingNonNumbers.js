/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/

function setup() {
    //numerical additional will continue from right-to-left until a non-number is found,
    //the data is treated like strings from then on
    var ans1 = 10 + 1.5 + "Apple";
    println("Adding '10 + 1.5 + Adding' gives: " + ans1);
    var ans2 = "Apple" + 10 + 1.5;
    println("Adding 'Apple + 10 + 1.5' gives: " + ans2);

}

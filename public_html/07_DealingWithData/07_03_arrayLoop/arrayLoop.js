/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function setup() {
    createCanvas(400, 400);
    background(0);
    var myArray = []; //declaration 
    for (var i = 0; i < 50; i += 1) {
        myArray[i] = i + 1; //initialise array with numbers;
    }
    println(myArray); //prints each element of array on a single line in the console
    fill(255);
    textSize(25);
    text("The array has length: " + myArray.length, 50, 150);
    textSize(18);
    text("The last element in the array is :"+myArray[myArray.length-1], 50, 250);
}


/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function setup() {
    createCanvas(400, 400);
    background(0);
    fill(255);
    var numberArray = [10, 21, 89, 3, 68]; //fill array with numbers explicitly
    text("The numberArray is: " +numberArray, 50,50); //display array contents
     //retriveve an element from the array using square brackets with an index number
     //noting that indexes start at 0
    text("The first element in numberArray is: " +numberArray[0], 50,150);
    text("The third element in numberArray is: " +numberArray[2], 50,250);
    text("The last element in numberArray is: " +numberArray[4], 50, 350);
   //arrays can hold all data types...    
    var fruitNames = ["apple", "pear", "banana", "starfruit"]; //array of strings
    var mixedArray = ["pumpkin", 10.4, "dog", false, -1]; // array of mixed datatypes
    var more_misc = ["dustpan", "k", fruitNames, mixedArray]; // array containing other arrays

}


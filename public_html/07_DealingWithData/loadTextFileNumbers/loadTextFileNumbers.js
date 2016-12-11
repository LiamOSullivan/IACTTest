/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
var temp = []; //An array of Strings to hold the input from the text file
function preload() {
    temp = loadStrings("textFile.txt"); // This reads each line in the input file into the temp array    
    
}

function setup() {
    createCanvas(400, 400);
    background(0);
    println("'temp' contains " + temp.length + " strings");
    var buffer = []; //The array acting as number 'buffer' 

    for (var i = 0; i < temp.length; i += 1) {
        buffer[i] = int(temp[i]); //convert strings to integers
    }
    println(buffer); //print out the buffer

}


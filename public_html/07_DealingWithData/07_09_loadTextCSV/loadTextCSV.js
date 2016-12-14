/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function preload() {
    temp = loadStrings("positions.txt"); // This reads each line in the input file into the temp array
    println("'temp' contains " + temp.length + " strings");
}
var temp = []; //An array of Strings to hold the input from the text file
var bufferX = [], bufferY = []; //The arrays acting as numerical coordinate storage

function setup() {
    createCanvas(400, 400);
    background(0);
    for (var i = 0; i < temp.length; i += 1) {
        var values = split(temp[i], ','); //'values' will have 2 elements
        bufferX[i] = int(values[0]);
        bufferY[i] = int(values[1]);
        ellipse(bufferX[i], bufferY[i], 10, 10);
    }

}

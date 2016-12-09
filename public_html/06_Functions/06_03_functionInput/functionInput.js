/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function setup(){
    createCanvas(400,400);
    background(0);
    textFunction(20); //call the function with an input argument
    
}
//the function definition, specifying a variable to store the vlaue pass in as an arg
function textFunction(sizeOfText){
    fill(255);
    textSize(sizeOfText); //using the input variable
    text("This is my text function", 25,100);
}
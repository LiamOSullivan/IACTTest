/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function setup(){
    createCanvas(400,400);
    background(0);
    fill(255);
    var textToDisplay = textGenerator();
    textSize(20);
    text(textToDisplay, 40,100);
}
 function textGenerator(){
     return "Here's some text from a function";
     
 }

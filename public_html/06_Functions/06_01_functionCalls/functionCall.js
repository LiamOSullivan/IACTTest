/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function setup() {
    createCanvas(400, 400); //A function call with multiple arguments- the fuction takes 2 inputs here.
    background(255);   //A function call with one argument- this is the function input.
    frameRate(25);     //Function call to set the speed of the draw() execution
    textSize(25);  //Function call to set the size of text drawn to the canvas (in pixels)

}
function draw(){
    background(255);
    //Functions with the same name but called with different args can have different behaviours
    var fps = frameRate(); //Function call which RETURNS a value, stored in a var. No args means it takes no input. Compare with above. 
    text("FPS: "+fps, 25,100);
    var randomValue = random(10); //Function call which RETURNS a value, stored in a var. Input arg determines range of possible output values.
    text("Value: "+randomValue, 25,200);
    
}

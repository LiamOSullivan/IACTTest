/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function setup(){
    createCanvas(400,400);
    frameRate(25);
  background(100, 100, 0); //coloured background
    
}

function draw(){
    //To get the animation to work as desired, the background should be re-drawn 
  //every frame. Otherwise all modifications will be drawn on top of the old display.
  background(100, 100, 0); //try commenting this out to see the effect
  //We can use the position of the mouse as data to create an interactive sketch.
  //For example, the mouseY variable stores the Y co-ordinate of the mouse cursor
  //when the mouse is over the display window.
  noStroke();
    ellipse(mouseX, mouseY, 25, 25); //draw the circle in the middle of the display.
  //println("Mouse X : "+ mouseX +"\tMouse Y :" + mouseY);//useful for debugging problems
  //The system variables pmouseX and pmouseY always contain the position of the mouse 
  //in the frame previous to the current frame. 
  stroke(255);
  line(pmouseX, pmouseY, mouseX, mouseY); //use previous mouse position to draw a line
    
}
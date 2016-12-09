/****************************************************
 Mouse Follow
 
We can use the mouse position  to control the value 
of a variable or any other parameter we desire.
This uses mouseX and mouseY to update the position 
of a circle onscreen.
As these system variables are continuously updated, 
the circle follows the mouse cursor around the display.
*****************************************************

 by Liam O'Sullivan- lmosulli@tcd.ie
 */


int circleSize = 50;
void setup() {
  size(400, 400);
  frameRate(25);
  background(100, 100, 0); //coloured background
}

void draw() {
  //To get the animation to work as desired, the background should be re-drawn 
  //every frame. Otherwise all modifications will be drawn on top of the old display.
  background(100, 100, 0); //try commenting this out to see the effect
  //We can use the position of the mouse as data to create an interactive sketch.
  //For example, the mouseY variable stores the Y co-ordinate of the mouse cursor
  //when the mouse is over the display window.
  ellipse(mouseX, mouseY, circleSize, circleSize); //draw the circle in the middle of the display.
  println("Mouse X : "+ mouseX +"\tMouse Y :" + mouseY);//useful for debugging problems
  //The system variables pmouseX and pmouseY always contain the position of the mouse 
  //in the frame previous to the current frame. 
  //line(pmouseX, pmouseY, mouseX, mouseY); //use previous mouse position to draw a line
}
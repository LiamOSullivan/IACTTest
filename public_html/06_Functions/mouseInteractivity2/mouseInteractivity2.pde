/****************************************************
 Mouse Interactivity 2
 
 *****************************************************
 by Liam O'Sullivan- lmosulli@tcd.ie
 */
 
 /* This modifies the Mouse Interactivity 1 sketch to move 
 the circle position to where the mouse is pressed, only 
 when it is pressed. Also, we’ll only change the colour when 
 the mouse is pressed.
 
 This uses the mousePressed() function, which is called when a
 mouse button is pressed. Any actions we wich to happen when 
 this event occurs can be placed in this function.
 
 */


int circleXPosition; 
int circleYPosition; 
int circleSize; 

void setup() {
  size(400, 400);
  frameRate(25);
  smooth();
  background(100, 100, 0); 
  fill(255);
  noStroke();

  circleSize = 50; 
  circleXPosition =width/2; //set the initial circle position 
  circleYPosition =height/2; //the center of the display
}

void draw() {
  //background(100, 100, 0); //try commenting this out to see the effect
  ellipse(circleXPosition, circleYPosition, circleSize, circleSize);
}

void mousePressed() {
  circleYPosition = mouseY; //Use the clicked y mouse position as the circle vertical coordinate
  circleXPosition = mouseX; //Use the clicked y mouse position as the circle vertical coordinate
}
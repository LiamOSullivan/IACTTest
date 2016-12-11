/****************************************************
 Homework 4b
 
 *****************************************************
 by Liam O'Sullivan- lmosulli@tcd.ie
 */

/* Write a sketch that draws a rectangle to the display 
which continuously follows the mouse.

Change the colour of the rectangle whenever the mouse 
is clicked.Try to generate a random colour when this happens.

 */

int rSize; 
int colorVal = 125;
void setup() {
  size(400, 400);
  frameRate(25);
  background(255); 
  noStroke();
  rectMode(CENTER);
  rSize = 100;
}

void draw() {
  background(100, 100, 0); //try commenting this out to see the effect
  fill(colorVal, 255-colorVal, colorVal, 200);
  rect(mouseX, mouseY, rSize, rSize);
}

void mousePressed() {
  colorVal = int(random(25, 255));
}
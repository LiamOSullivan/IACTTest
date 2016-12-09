/****************************************************
 Mouse Interactivity 1
 *****************************************************
 by Liam O'Sullivan- lmosulli@tcd.ie
 */

//We can use the mouse position  to control the value of a variable
//or any other parameter we desire.
//This sketches use the vertical mouse position to control the size 
//of a circle -> moving the mouse to the top of the sketch causes it 
//to GROW. The horizontal position changes the colour of the sketch
//but must be scaled to produce useful colour values.

int circleSize; //our variable to hold the circle size
float mouseXScaled; //will be used to hold scaled values of mouse X position (see below)


void setup() {
  size(400, 400);
  frameRate(25);
  circleSize = 0;//Initalise the variables
  mouseXScaled =0.0; 
  smooth();
  background(100, 100, 0); //coloured background
}

void draw() {
  //To get the animation to work as desired, the background should be re-drawn 
  //every frame. Otherwise all modifications will be drawn on top of the old display.
  background(100, 100, 0); //try commenting this out to see the effect
  //We can use the position of the mouse as data to create an interactive sketch.
  //For example, the mouseY variable stores the Y co-ordinate of the mouse cursor
  //when the mouse is over the display window.
  //We need to use fill() to set the circle colour BEFORE we draw it,
  //so we'll consider the horizontal mouse position held in mouseX first.
  //As the display is 400 pixels wide, moving the mouse past 
  //255 on the x-axis will have no further effect on colour
  //if mouseX is used within fill().
  //fill(mouseX, 255, 255); //uncomment to see this
  //Map function allows us to rescale the variables...
  //  mouseXScaled = map(mouseX, 0, width, 0, 255); //map() returns a floating point number
  //  //Now mouseXScaled will vary between 0-255 across the full width of the display
  //  fill(mouseXScaled); //Use mouseXScaled for colour values
  //  
  circleSize = mouseY;// this is a simple way to resize the circle based on the y-position of the mouse
  //The following uses the map() function to scale the mouseY variable
  //circleSize = int( map(mouseY, 0, height, height, 0)); //Use the y height as a control for the circle size
  //as map() returns a floating-point number, need to use int() to convert to target data type
  ellipse(width/2, height/2, circleSize, circleSize); //draw the circle in the middle of the display.
  println("circleSize: "+ circleSize);//useful for debugging problems
}
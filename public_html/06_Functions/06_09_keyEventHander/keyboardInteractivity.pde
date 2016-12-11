/****************************************************
 Keyboard Interactivity
 
 Uses a switch statement to draw a different shape
 based on keyboard input.
 *****************************************************
 Pseudocode outline:
 
 Use the continuous mode structure.
 
 Set up a global int variable to hold a number representing 
 the shape to be drawn- this is the 'select' variable.
 
 In draw(), use an if-statement to draw a different shape 
 based on the 'select' variable.
 When 'select' has a value of 0 draw a square, 1 -> circle
 and 2 -> ellipse.
 If select has any other value, nothing should be drawn.
 
 In keyPressed(), use a switch to change the select variable 
 based on keyboard input. Print a message for each key to 
 help debugging.
 
 *****************************************************
 by Liam O'Sullivan- lmosulli@tcd.ie
 */

//Global variables: anything that will be updated throughout the 
//sketch needs to have global scope...
int select;//We'll use an int variable to decide what shape to draw...
//...this will be checked using operators placed in conditional statements

void setup() {
  size(400, 400); //set the display to the size of the image
  frameRate(12);  //set the frameRate
  background(255); //draw the background as white
  fill(255, 55, 150, 200); //set the shape fill colour
  smooth(); //turn smoothing on
  rectMode(CENTER); //draw rectangles from their centers
  select=0; //initalise the 'select' variable to some default value
}

void draw() {
  background(255); //redraw the background each frame.
  if (select==1) {
    rect(width/2, height/2, width/4, height/4); //draw a square
  }
  else if (select==2) {
    ellipse (width/2, height/2, width/4, height/4);//draw a circle
  }
  else if (select==3) {
    ellipse(width/2, height/2, width/4*2, height/4); //draw an ellipse
  }
}

//Now we need a way to update the select variable based on keyboard input.
//The keyPressed() function can do this.
//We put the function outside the draw loop as it is automatically called 
//when a key is pressed.
//There is no need to call keyPressed() every draw() loop iteration, only 
//when a key is pressed (this happens autmatically, 'under the hood').

void keyPressed() {
  //The 'key' field is a system variable (like 'width') that stores the last 
  //keyboard key that was pressed.
  //We can use this in a switch statement. Depending on the last key pressed, the select variable
  //will be set to some value that will be used in the draw() loop if-statments.

  switch(key) {
    //The first case means that when '1' is pressed on the keyboard, 'select' is set to 0.
  case '1':  //enclosing the case label in apostrophes means that the 
    //key code associated with that character will be looked for.
    select = 1;
    println("Key 1 Pressed- drawing a square"); //This is only to help debug problems and doesn't take part 
    //in the functioning of the sketch.
    break; //the break statements ensure that only one case is executed
  case '2': 
    select = 2;
    println("Key 2 Pressed- drawing a circle ");
    break;
  case '3': 
    select = 3;
    println("Key 3 Pressed- drawing an ellipse");
    break;
    //It is good practice to always supply a default case.
    //This will help prevent buggy program performance.
    //This sets the 'select' variable to 0 if any key is pressed other that 1, 2 or 3.
  default:             
    //Pressing any other key will change the value of 'select' to some default value.
    select=0;
    println("Unrecognised Key");
    break;
  }
}
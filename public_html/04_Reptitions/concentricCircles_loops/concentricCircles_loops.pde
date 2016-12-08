/**************************************
 * Concentric Circles - Loops
 ***************************************
 Draws 6 concentric circles. Variables are 
 used to store the center position, rather 
 than 'hard coding' the values as args.
 The positions of the circles 
 can be changed more easily by 
 changing the values of the variables.
 
 This version uses loops to draw the circles, 
 meaning the code is more concise.
 Equivalent WHILE and FOR loops are shown
 
 Liam O'Sullivan - lmosulli@tcd.ie
 
 */
size(800, 800); //call size() first, so that width and height are set
float sizeStep = width/6; //divide the width by the number of circles  
int xPosition = width/2; //variable for x coordinate of circles, as they are concentric
int yPosition = height/2; //variable for y coordinate
background(0);
noFill();
//fill(0);
stroke(255);

//for-loop uses an initalisation, condition and increment
//we declare the loop counter variable within the for-loop parentheses
for (int count=1; count<=6; count+=1) {
  //the count variable goes from 1 to 6, so we can multiple it be the sizeStep to get the size of each circle
  ellipse(xPosition, yPosition, count*sizeStep, count*sizeStep);
}

//we must create a counter variable before the while loop 
//and manually increment it explicitly in the loop
//int count =1; 
//while (count<=6) {
//  ellipse(xPosition, yPosition, count*sizeStep, count*sizeStep);
//  count++;
//}
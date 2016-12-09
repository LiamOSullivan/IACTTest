/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
//First we need to set up some variables with global scope.
//Just as in the case of loops, variables declared within a 
//function have local scope i.e. they are only valid within 
//that function. To create variables that may be accessed 
//and modified within both the setup() and draw()functions 
//we need to declare them before setup()

var circleSize;
var maxSize;
//Lets initialise the variable in setup() and modify it in draw()...
function setup(){
   createCanvas(400,400);
  //frameRate() controls the number of frames draw to the screen per second.
  //In fact, it is the number of times the draw loop is run per second.
  //Higher frame rates need a more powerful computer to run. 
  //Try anything between 12 and 50 to see the effect on graphics
  //If the computer can't keep up the frame rate will drop and it will carry 
  //out each draw() iteration as fast as it can. Default is 50fps.
  frameRate(25);
  background(100,100,0);
  noStroke();
  fill(20, 242,69,150);  
  //Next we initalise our variables  
  circleSize = 0;
  maxSize = width/2;
    
}

function draw(){
  background(100,100,0); //this redraws the background each time the draw loop runs
  ellipse(width/2, height/2, circleSize, circleSize);
  //now write a statement that increments the variable by 5 each time the 
  //draw loop runs...
  //we can use an if statement to decide when we should stop applying the increment 
  if(circleSize<maxSize){
    circleSize +=5;
  }
  //print the result to the message window to see what happens
  //println("circleSize: "+circleSize);
    
}
/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/

var xPos, yPos;
function setup(){
    createCanvas(400,400);
    background(0);
    fill(255);
    xPos = width/2;
    yPos = height/2;
    xSpeed = random(-5,5);
    ySpeed = random(-5,5);
    
}

function draw(){
    background(0);
    ellipse(xPos,yPos, 100,100);
    xPos+=xSpeed;
    yPos+=ySpeed;
    if ( xPos >= width) {
      xSpeed=-xSpeed;
    }
    if ( xPos <= 0) {
      xSpeed=-xSpeed;
    }
    if ( yPos >= height) {  
      ySpeed=-ySpeed;
    }
    if ( yPos <= 0) {      
      ySpeed=-ySpeed;
    }
    
}
/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/

function setup() {
  createCanvas(400,300);
  println("The width of the canvas is "+width);
  println("The height of the canvas is "+height);
  background(0);
  // The circle will always be in the middle of the window no matter 
  // the size of the canvas, if it is located at (width/2, height/2).
  ellipse(width/2,height/2,height/3,height/3);
 }





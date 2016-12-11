/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
var output;

function setup(){
    createCanvas(400,400);
    background(0);
    frameRate(5); //slow the frame rate so there's not too much data being written 
  // Creates a new file in the sketch directory
  output = createWriter("positions.txt"); 
    
}

function draw(){
    ellipse(mouseX, mouseY, 10,10); //draws at the mouse position
    output.println(mouseX+","+mouseY);  // write the coordinates to the output, separated by a comma
 }
 
function keyPressed() {
  output.flush();  // Writes the remaining data to the file
  output.close();  // Finishes the file
  background(0);
  fill(255);
  text("Data written to file", 50, height/2);
  exit();  // Stops the program
}
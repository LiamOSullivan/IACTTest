/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/

function setup() {
    createCanvas(400, 400);
    background(127);
    noStroke();

// Bright red
    fill(255, 0, 0);
    ellipse(100, 50, 100, 100);

// Dark red
    fill(127, 0, 0);
    ellipse(100, 150, 100, 100);

// Pink (pale red)
    fill(255, 200, 200);
    ellipse(100, 250, 100, 100);

//White
    fill(255, 255, 255);
    ellipse(100, 350, 100, 100);
    
//Bright green
    fill(0, 255, 0);
    rect(250, 10, 80, 80);

//Bright blue
    fill(0, 0, 255);
    rect(250, 110, 80, 80);
    
//Black
    fill(0, 0, 0);
    rect(250, 210, 80, 80);
    
//Turquoise (green and blue mix)
    fill(0, 255, 255);
    rect(250, 310, 80, 80);
    

    
    
}
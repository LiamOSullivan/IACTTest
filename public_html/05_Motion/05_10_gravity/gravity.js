/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
var x;   // x location of square
var y;     // y location of square

var speed = 0;   // speed of square

// A new variable, for gravity (i.e. acceleration).   
// We use a relatively small number (0.1) because this accelerations accumulates over time, increasing the speed.   
// Try changing this number to 2.0 and see what happens.
var gravity = 0.1;

function setup() {
    createCanvas(400, 400);
    background(0);
    fill(255);
    rectMode(CENTER);
    x = width / 2;
    y = 0;
}

function draw() {
    background(0);
    // Display the square
    rect(x, y, 10, 10);

    // Add speed to location.
    y = y + speed;

    // Add gravity to speed.
    speed = speed + gravity;

    // If square reaches the bottom
    // Reverse speed
    if (y > height) {
        // Multiplying by -0.95 instead of -1 slows the square down each time it bounces (by decreasing speed).  
        // This is known as a "dampening" effect and is a more realistic simulation of the real world (without it, a ball would bounce forever).
        speed = speed * -0.8;
        y = height;
    }
}
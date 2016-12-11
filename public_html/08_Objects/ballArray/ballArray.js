/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
var ballArray = [];
var nBalls = 25;

function setup(){
    createCanvas(400,400);
    frameRate(25);
    background(0);
    fill(255,150);
    noStroke();
    for(var i=0;i<nBalls;i+=1){
        var rand = random(25,100);
        ballArray[i] = new Ball (rand);
    }    
}

function draw(){
    background(0);
    for(var i=0;i<nBalls;i+=1){
        ballArray[i].update();
        ballArray[i].draw();
    }
    
}


function Ball(sizeIn) {
    this.x = width / 2;   //initialise properties
    this.y = height / 2;    
    this.xSpeed = int(random(-10, 10)); 
    this.ySpeed = int(random(-10, 10));
    this.size = sizeIn; //the value passed in will be used as the ball size

    this.update = function() {
        //update() method increments the ball position and checks for boundary conditions
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if (this.x >= width) {
            this.xSpeed = -this.xSpeed;
        }
        if (this.x <= 0) {
            this.xSpeed = -this.xSpeed;
        }
        if (this.y >= height) {
            this.ySpeed = -this.ySpeed;
        }
        if (this.y <= 0) {
            this.ySpeed = -this.ySpeed;
        }
    };
//draw() method draws the ball to the screen
    this.draw = function() {
        ellipse(this.x, this.y, sizeIn, sizeIn);
    };
}
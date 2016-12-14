/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
var useOutlines = false;
var useFillColor = true;

function setup(){
    createCanvas(400,400);
    background(0);
    println("useOutlines is "+useOutlines);
    println("useFillColor is "+useFillColor);
    if(useOutlines){
        stroke(255,100);
        noFill();
    }
    else if(useFillColor){
        fill(150,30,200,150);
        noStroke();
    }
    else{
        stroke(255,100);
        fill(150,30,200,150);
    }
    ellipse(200,100,100,100);
    rectMode(CENTER);
    rect(200,300,100,100);
       
}



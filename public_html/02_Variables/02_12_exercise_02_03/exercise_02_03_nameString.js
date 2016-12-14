/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
var myName = "Ada Lovelace";
function setup() {
    createCanvas(400, 400);
    background(0);
    fill(255, 150); //fill color for characters, with reduced opacity
    textSize(128);
    text(myName, random(-width / 4, width / 2), random(height));
    textSize(64);
    text(myName, random(-width / 4, width / 2), random(height));
    textSize(32);
    text(myName, random(-width / 4, width / 2), random(height));
    textSize(16);
    text(myName, random(-width / 4, width / 2), random(height));
    textSize(8);
    text(myName, random(-width / 4, width / 2), random(height));
}


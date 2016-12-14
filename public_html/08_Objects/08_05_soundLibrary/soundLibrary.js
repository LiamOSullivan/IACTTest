/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function preload() {
    mySound = loadSound('MarioThrow.wav');
}

function setup() {
    createCanvas(400, 400);
    background(0);
    mySound.setVolume(0.1);
    mySound.play();

}
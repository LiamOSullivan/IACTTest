/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
var soundsArray = []; //aray to hold sounds
var keyNo = null; //number of the sound to play
function preload(){
    
   //load all sounds into the array using a loop 
   for(var i=0;i<6;i+=1){
    soundsArray[i] = loadSound(i+".wav");
    println("Loaded sound "+i+".wav");
   }
}

function setup(){
    createCanvas(200,200);
    background(0);
    textAlign(CENTER);
    textSize(100);
    fill(255,150);
}

function draw(){
    background(0);
    if(keyNo!=null){ //only print a vlaid number
    text(keyNo, 100,100);
    }   
    
}
function keyPressed(){
    keyNo = int(key); //convert character to number
    println("key is "+key+" which is number "+keyNo);
    if(keyNo>=0 && keyNo <=5){
    soundsArray[keyNo].play();
    println("Trigger sound #"+keyNo);
    }
    else{
        keyNo=null; //set null so text not printed in draw
    }
}
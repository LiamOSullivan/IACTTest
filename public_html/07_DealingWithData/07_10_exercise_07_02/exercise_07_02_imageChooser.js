/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
var images = []; //array to hold images
var imageIndex =0;
function preload(){
    
   //load all sounds into the array using a loop 
   for(var i=0;i<6;i+=1){
    images[i] = loadImage(i+".jpg");
    println("Loaded image "+i+".jpg");
   }
}

function setup(){
    createCanvas(200,200);
    background(0);
    
}

function draw(){
    
    
}
function keyPressed(){
    
    println("key is "+key);
    
    if(key == 'Q'){
      resizeCanvas(images[0].width, images[0].height);
   image(images[0], 0,0);  
    }
    else if (key == 'W'){
        resizeCanvas(images[1].width, images[1].height);
    image(images[1], 0,0);
        
    }else if (key == 'E'){
    resizeCanvas(400, 300); //for large images, fit them to a useable size
    image(images[2], 0,0, 400,300);
        
    }else if (key == 'R'){
        resizeCanvas(images[3].width, images[3].height);
    image(images[3], 0,0);
        
    }else if (key == 'T'){
        resizeCanvas(400, 300); //for large images, fit them to a useable size
    image(images[4], 0,0, 400,300);
        
    }
    else if (key == 'Y'){
        resizeCanvas(400, 300); //for large images, fit them to a useable size
    image(images[5], 0,0, 400,300);
        
    }
    else{
    resizeCanvas(200,200);
    background(0);
   
    }
}
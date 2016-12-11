/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/

var helloStr = 'Hello to you!'; //single quotes
var favStr = "My favourite fruit is an apple"; //double quotes

function setup(){
    createCanvas(400,400);
    background(0);
    fill(255);
    textSize(25);
    text("helloStr says: "+helloStr, 25, 50);
    text("***", 25, 100);
    
    text(favStr, 25, 150);
    textSize(18);
    text("The above string has "+favStr.length+ " words", 25, 200);
    var position = favStr.indexOf("favourite");
    text("|favourite| is at word index "+position, 25, 250);
    
    var newStr = favStr.substring(3, 18); //start- and end index
    text("A substring is |"+newStr+"|", 25, 300);
    
    var upFav = favStr.toUpperCase();
    text(upFav, 25, 350);
    
}


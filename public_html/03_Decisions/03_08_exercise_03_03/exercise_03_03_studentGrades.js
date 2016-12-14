/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function setup() {
    createCanvas(400,400);
    
    var percent = int(random(0, 100));
    textSize(25);
    text("Percentage Mark: "+percent, 50, 100);
    
    if (percent >= 70) {
        text("Assign grade 1", 50,200);
    } else if (percent >= 60) { // In one conditional statement, you can only ever have one if and one else. However, you can have as many else if's as you like!
        text("Assign grade 2.1", 50,200);
    } else if (percent >= 50) {
        text("Assign grade 2.2",50,200);
    } else if (percent >= 40) {
        text("Assign grade Pass",50,200);
    } else {
        text("Assign grade Fail",50,200);
    }

}


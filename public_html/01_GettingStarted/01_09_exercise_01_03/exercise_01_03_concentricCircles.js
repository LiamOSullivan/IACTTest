/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function setup() {
    createCanvas(400, 400);
    background(0);
    fill(0); //black fill colour
    stroke(255,0,0); //red stroke outline
    strokeWeight(4); //stroke thickness
    ellipse(200, 200, 400, 400); //largest circle drawn first, same size of canvas
    ellipse(200, 200, 300, 300); //subsequent smaller circles are drawn in sequence...
    ellipse(200, 200, 200, 200); //...these will appear 'in front' of the previous circles
    ellipse(200, 200, 100, 100);
}

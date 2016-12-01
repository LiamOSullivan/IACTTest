/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function setup() {
    createCanvas(600, 600);
    background(0);
    fill(0); //black fill colour
    stroke(255,0,0); //red stroke outline
    strokeWeight(4); //stroke thickness
    ellipse(300, 300, 600, 600); //largest circle drawn first, same size of canvas
    ellipse(300, 300, 500, 500); //subsequent smaller circles are drawn in sequence...
    ellipse(300, 300, 400, 400); //...these will appear 'in front' of the previous circles
    ellipse(300, 300, 300, 300);
    ellipse(300, 300, 200, 200);
    ellipse(300, 300, 100, 100);
}

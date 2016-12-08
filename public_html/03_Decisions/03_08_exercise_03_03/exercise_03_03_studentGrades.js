/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function setup() {
    var grade = random(0, 100);
    
    if (grade >= 85) {
        println("Assign grade 1");
    } else if (grade >= 60) { // In one conditional statement, you can only ever have one if and one else. However, you can have as many else if's as you like!
        println("Assign grade 2.1");
    } else if (grade >= 50) {
        println("Assign grade 2.2");
    } else if (grade >= 40) {
        println("Assign grade Pass");
    } else {
        println("Assign grade Fail");
    }

}


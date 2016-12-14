/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
var person1 = {
    firstname: "John",
    lastname: "Doe",
    eyecolor: "blue"
};

function setup() {
    println("The record for person 1 is: ");
    println(person1);
    println("***");
    println("Name: " + person1.firstname + " " + person1.lastname);
    println("***");
    println("Delete eye colour and add age info");
    delete person1.eyecolor;
    person1.age=25;
    println("***");
    println("Now, the record for person 1 is: ");
    println(person1);  
    println("***");
}

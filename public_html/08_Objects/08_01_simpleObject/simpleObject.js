/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/
function setup() {
    createCanvas(400, 400);
    background(0);
    var person1 = new Person("Jack");
    var person2 = new Person("Jill");
    person1.greet();
    person2.greet();

}


function Person(name) {
    this.name = name;   //initialise properties
    //greet() method says hello
    this.greet = function () {
        println("Hi! I'm " + this.name);
    };
}
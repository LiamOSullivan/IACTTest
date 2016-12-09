/********************************************** 
 Check If Larger
 ***********************************************
 This program uses a function find the larger of 2 numbers.
 Variables are again used to hold values, this time 
 randomly generated.
 
 A boolean value is returned. If the first number 
 is larger than the second, it returns true 
 otherwise it returns false.

 A suitable message is printed in setup().
 ***********************************************/

float number1, number2; //declare two variables

void setup() {
  //generate some random values for the variables and print them out
  number1=random(0, 100);
  number2=random(0, 100);
  print("Number 1 is "+number1); 
  println("\t\tNumber 2 is "+number2); 
  
  if (checkIfLarger(number1, number2)) {
    println("Number 1 is larger "); //print the answer
  } else {
    println("Number 2 is larger "); //print the answer
  }
}

void draw() {
}

//Defining the function...
//A boolean value is returned, if the first number is larger than the second, 
//It will accept two 'floats' as input, so the parameters are declared as float variables, seperated by a comma
boolean checkIfLarger(float in1, float in2) {
  if (in1>in2) {
    return true;
  } else {
    return false;
  }
}
/********************************************** 
 Homework 4a
 ***********************************************
 Write a sketch that uses a function to add all the inputNumbers up to some inputNumber.
E.g. sumFunction(25) will add 1+2+3+4…+25

Set a maximum value which the function will accept, 
otherwise return a value of -1.

Print out the sum calculated or a suitable 
message saying the inputNumber entered was too large.

 ***********************************************/

int inputNumber = 37; 
int maximum = 50;

void setup() {
    
  println("Number is "+inputNumber);
  println();
  int answer = sumFunction(inputNumber); 
  if (answer!=-1) {
    println("Sum up to "+inputNumber+" is "+answer); //print the answer
  } else {
    println("The input number entered is too large!"); //print the answer
  }
}

void draw() {
}


int sumFunction(int in1) {
  if (in1>maximum) {
    return -1;
  } else {
    int sum = 0;
    for(int i=0;i<=in1;i++){
      sum+=i;
    }
    return sum;
  }
}
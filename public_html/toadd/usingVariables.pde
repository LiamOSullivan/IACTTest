/****************************************************
Using Variables
*****************************************************
This sketch introduces the use of variables.

Go through the code and 'uncomment' or 'comment out' the
statements as appropriate. 

by Liam O'Sullivan: lmosulli'at' tcd 'dot'ie

*/

//Let's set the display window size
size(400,400);

//Let's add a background colour to the window using the background() function...
//We can specify colour in a number of ways; 
//for a background we could use Grayscale or RGB (Red, Green, Blue).
//Processing is smart enough to recognise how many arguments have been provided and 
//will choose the correct colour mode.
background(0); //In greyscale, 0 is black and 255 is white. 
//background(100,0,0); //RGB

//Processing uses 8-bit colour.  
//This means that there are 2 to the power of 8, or 256 possible values for each colour.
//0 counts as a colour level, so the colour values range from 0 to 255.
//Check out more on colour http://www.processing.org/learning/tutorials/color/

//draw a square to the display, as we saw before.
//rect(100,100,150,150);

//If you can't remember what arguments a function takes simply highlight it 
//and choose 'Find in reference' from the Help menu.

//This works fine, but when we write more complex code, 
//we may want to do things with the rectangle like move it around or duplicate it repeatedly.
//It would therefore be more useful to use a VARIABLE to hold the value for, say, size.
//We could then change the variable if we wanted and we wouldn't have to go and update the code
//repeatedly. We just change the variable value.

//So, we want to set up a variable for the side length of the square:
//int squareSize = 150;
//The variable name is written in "camelbackNotation"
//Variable names can only contain letters, underscores, numbers and the dollar sign " $ ". 
//The initial character cannot be a number, but the rest are acceptable.
//This statement is a variable declaration AND initialisation. 
//The declaration sets the data type as "int", meaning integer.
//An integer is essentially a whole number (see the class notes for the range 
//of values that an int can have).
//It sets the variable name to "squareSize".
//The initialisation part is giving the variable the value "150". 
//The " = " sign is called the "Assignment Operator".

//Now we can use the rect() function to draw a square using the variable 
//we've created.
//rect(0,0, squareSize,squareSize);
//The first 2 args give the position to draw the rectangle from.

//Processing co-ords start at the top left corner as (0,0). 
//x values increase moving horizontally from left to right.
//y values increase moving downwards from top to bottom.
//The second 2 args give the horizontal and vertical sizes of the shape.

//Notice that the square has line around its outside- this is called a 
//"stroke".
//The square has an internal colour of white. This is the "fill".
//The square was drawn with the default settings for stroke and fill, 
//but we can specify our own using more handy functions.

//fill(200,0,0,100); //A red fill with slight transparency- this is called an alpha value (e.g. RGBA)
//stroke(0,255,100);//A blue-green stroke
//strokeWeight(5);   // strokeWeight controls the thickness of the stroke in pixels.
//rect(0,0, squareSize,squareSize);
//the stroke() and fill() functions take colour values just like background(), 
//but they also can use an alpha channel value to create transparency.

//The rectangle was drawn by default with its corner at the (0,0) position, but we can change this using:
//rectMode(CENTER);
//Now we can draw another identical rectangle but with its center at (0,0)
//This will be drawn on top of the first rectangle as it happens later in the Processing code.
//rect(10,10, squareSize,squareSize);
//Note that CENTER is capitalised. This is usually the case for keywords that specify a particular mode.

//The fill(), stroke() and rectMode() functions all work like switches. 
//Once they have been set, they will stay in that state until they are re-set.
//Let's draw a circle with a different colour and position using the ellipse() function 
//and no stroke outline:
//fill(0,0,200, 200);
//noStroke(); //this draws without a stroke outline. It takes no arguments. 
//Notice the "camelbackNotation" for functions as well as variables.

//Lets draw a circle using the ellipse() function, which works very similarly to rect()...
//ellipse(400,300,squareSize,squareSize);
//We've used the squareSize varible for the circle radius. 
//The variable is just a number and Processing doesn't care how it is used!

//The circle appears quite jagged, but there is a function that can help this.
//smooth();
//ellipse(400,300,squareSize,squareSize);

//smooth() actually applies an anti-aliasing filter to the shape to make it look cleaner. 
//Unfortunately, it uses more computer power to render anti-aliased shapes, 
//but you won't notice this until your programs become very computationally demanding.
//You can switch anti-aliasing off again using noSmooth(); to save processing time. 

//We drew the circle to the center of the window by looking at the args to size() 
//above and working out the center point.
//If we resize the window, the circle won't be in the center any more.
//The numbers "400" and "300" are called "magic numbers" 
//They are something to avoid as they must be changed every place they occur 
//when other variables in the program affect them.

//A better way is:
//ellipse(width/2,height/2,squareSize,squareSize);
//"width" and "height" are special system variables which store the width and height 
//of the display window as specified by size();
//The " / " symbol is an arithmetic operator. 
//It is the division operator, so the first number, called an operand, is 
//divided by the second operand.
//The 5 arithmetic operators are " * " " / " " + " " - " and " % "
//We'll look at using operators later.

//Let's digress for a moment to talk about using print()...
//This writes messages and info to the message window below and is very useful for debugging code.
//For example, if the size of the objects looked wrong we could write the value of squareSize 
//to the message window like this:
//print(squareSize);
//If we want add text at the start of the message to identify what we are printing we use
//print("The value of squareSize is: " + squareSize);
//The text within the quotes is a literal variable. 
//Processing does not try to interpret it, it just prints it out as is.
//It is handy to put a carriage return (newline character) at the end of a message 
//to keep it legible when printing multiple messages.
//println("The value of squareSize is: " + squareSize);
//println("The width of the display window is: " + width);
//println("The height of the display window is: " + height);



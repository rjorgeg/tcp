@Rut
probando git, a ver si nos sle de una vez!!!

cambios 
cambios
cambios
cambios





.length //=> gives you the length of the string you put before this function p.e: "Rut".length => 3

.substring()//=> "some word".substring(x, y) where x is where you start chopping and y is where you finish chopping the original string. 
			//p.e: First 3 letters of "Batman"=>"Batman".substring(0,3);
			//p.e:From 4th to 6th letter of "laptop"=>"laptop".substring(3,6);
			//every string starts in the position 0, in the word hello the letter h=>position 0,e=>position 1,l=>position 2,l=>position 3,o=>position 4
			//p.e:  To select for the "he" in "hello", you would write this: "hello". substring(0, 2);

.match()    //=> "string.match(regexp)"
            //ejemplo1:
            //var str = "The rain in SPAIN stays mainly in the plain";
            //var res = str.match(/ain/g);
            //The result of res will be an array with the values:
            //ain,ain,ain 
            //ejemplo2:
            //var str = "The rain in SPAIN stays mainly in the plain";
            //var res = str.match(/ain/gi);
            //The result of res will be:
            //ain,AIN,ain,ain 
.push() //=>
        //
        //
        //
        //
        //
        //
confirm('This is an example of using JS to create some interaction on a website. Click OK to continue!');
//CONFIRM=These boxes can be used on websites to confirm things with users.
//You've probably seen them pop up when you try to delete important things or leave a website with unsaved changes. 

prompt("What is your name?");
//PROMPT=You can ask for input with a prompt.

cosole.log()//=>will take whatever is inside the parentheses and log it to the console below your code—that's why it's called console.log()!
			//This is commonly called printing out.

var variableName = variableValue; //to create new variables


if (condition) 
{
    // if condition is true
    // do this code
}
else // "otherwise"
{
    // do this code instead
}
//if the condition is true the code inside the first pair of curly braces will run,
//if it's false the second pair of curly braces wil run


for (var counter = 1; counter < 11; counter++) {
    console.log(counter);
    //This is going to print out to the console from 1 to 10 
}





function // This is how looks like:
var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};
// we call the function by name
// Here, it is called 'dividebythree'
// We tell the computer what the number input is (i.e. 6)
// The computer then runs the code inside the function!
divideByThree(6);



return // =>return keyword simply gives the programmer back the value that comes out of the function. 
//Ejem1:
// Parameter is a number, and we do math with that parameter
// Call timesTwo here!
var timesTwo = function(number) {
    return number * 2;
};
var newNumber = timesTwo (7);
console.log(newNumber);
//Ejem2:
// Define quarter here.
var quarter = function (number){
    return number / 4;
}
if (quarter(12) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}



Global vs Local Variables:
//Ejem1:
var my_number = 7; //this has global scope
var timesTwo = function(number) {
    my_number = number * 2; //here you use the global variable
    console.log("Inside the function my_number is: ");
    console.log(my_number);
}; 
timesTwo(7);
console.log("Outside the function my_number is: ")
console.log(my_number);
//Ejem2:
var my_number = 7; //this has global scope
var timesTwo = function(number) {
    var my_number = number * 2;//here you create a new variable calls it as the global variable
    console.log("Inside the function my_number is: ");
    console.log(my_number);
}; 
timesTwo(7);
console.log("Outside the function my_number is: ")
console.log(my_number);

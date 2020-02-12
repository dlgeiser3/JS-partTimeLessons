// To Do
// Assign Static Layout



/**************************
WHITEBOARD 1 - FIZZ BUZZ (Conditionals Only)
**************************/
/*
Challenge:
Create a variable named FB that takes numbers
Write a conditional that: 
Prints out "Fizz" if the number is divisible by 3
Prints out "Buzz" if the number is divisible by 5
Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
*/

let FB = 15;

if (FB % 3 === 0 && FB % 5 === 0) {
  console.log('Fizz Buzz');
} else if (FB % 5 === 0) {
  console.log('Buzz');
} else if (FB % 3 === 0) {
  console.log('Fizz');
}

let FB = 30;



switch (true) {
  case (FB % 3 === 0 && FB % 5 === 0):
  console.log('Fizz Buzz');
  break;
  case (FB % 5 === 0):
  console.log('Buzz');
  break;
  case (FB % 3 === 0):
  console.log('Fizz');
  break;  
}

let FB = 30;



(FB % 3 === 0 && FB % 5 === 0) 
? console.log('Fizz Buzz') 
: (FB % 5 === 0) ? console.log('Buzz') 
: (FB % 3 === 0) ? console.log('Fizz') 
: console.log(FB);



/**************************
SCOPE CHALLENGE
**************************/
// CHALLENGE SCOPE 1
// Can you determine what will be console logged?
var x = "Cory";
function scope(){
  var x = "world";
  if (true){
    var x = "Hello";
    console.log(x)
  }
  console.log(x)
}
scope();
console.log(x)
// ANSWER---> "Hello" , "Hello", "Cory"
// CHALLENGE SCOPE 2
//What can you do to change the output to be "Hello" "world" "Cory"
  //explain why?
      
var x = "Cory";
function scope(){
  var x = "world";
  if (true){
    let x = "Hello"; //<------ ANSWER change var to let
    console.log(x)
  }
  console.log(x)
}
scope();
console.log(x)
// ANSWER  ----> var does not respect block scope, let DOES respect block scope
// CHALLENGE HOIST
//Can you determine the order of hoisting?
//Still in progress

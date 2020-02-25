// QUESTION
// What property can you use to find out how many characters are in a string or how many items are in an array?




// ANSWER
let name = 'Finn'
console.log(name.length)


//QUESTION:
// Write a conditional that checks if it's raining. If it is console.log bring an umbrella.




//ANSWER
let rain = true;
if (rain) {
  console.log('Bring an umbrella')
}



// QUESTION
// Expand on the previous conditional. If it is NOT raining console log wear sunscreen.




// ANSWER
let rain = false;
if (rain) {
  console.log('Bring an umbrella')
} else {
  console.log('Wear sunscreen')
}


// QUESTION
// Write a switch that checks if a number if even and console.log if it is even or odd




// ANSWER
let num = 7;

switch (true) {
  case (num % 2 === 0):
    console.log('even')
    break;
  default:
    console.log('odd')
}


// QUESTION 
// Write a ternary that checks if a number if even and console.log if it is even or odd






// ANSWER
let num = 0;
num % 2 === 0 ? console.log('even') : console.log('odd')
//Warm up white boarding challenges


// Set up two varibles equal to any two integers
// Write a conditional that checks if the first varible is divisible by the second
// If it is console log `value of ${a} is divisble by value of ${b}`
// If it is not console log the remainder


let a = 142;
let b = 17;

if (a % b === 0) {
  console.log(`${a} is divisible by ${b}`)
} else {
  console.log(`${a} divided by ${b} leaves a remainder of ${a % b}`)
}


switch (true) {
  case (a % b === 0):
    console.log(`${a} is divisible by ${b}`)
    break;
  default:
    console.log(`${a} divided by ${b} leaves a remainder of ${a % b}`)
}


(a % b === 0)
  ? console.log(`${a} is divisible by ${b}`)
  : console.log(`${a} divided by ${b} leaves a remainder of ${a % b}`)



//Checking a string

// STEP 1
//Write a conditional that checks if a string is empty
//If it is console log 'Please type something'

// STEP 2
//If it is not console log the string

// STEP 3
//add to your conditional to check if the string has more than 10 characters
//if it does console log please type less

let string = "";

if (string === "") {
  console.log('Please type something')
} else if (string.length > 10) {
  console.log('Please type less')
} else {
  console.log(string)
}

switch (true) {
  case (string === ""):
    console.log('Please type something')
    break;
  case (string.length > 10):
    console.log('Please type less')
    break;
  default:
    console.log(string)
}

(!string)
  ? console.log('Please type something')
  : (string.length > 10) ? (console.log('Please type less'))
    : console.log(string)

console.log(!string)


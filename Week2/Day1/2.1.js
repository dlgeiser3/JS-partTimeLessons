//Warm up white boarding challenges

// Is a divisible by b?
// Set up two varibles equal to any two integers
// Write a conditional that checks if the first varible is divisible by the second
// If it is console log "value of a is divisble by value of b"
// If it is not console log the remainder


let a = 10;
let b = 3;

if (a % b === 0) {
  console.log(`${a} is divisible by ${b}`)
} else {
  console.log(`${a} divided by ${b} leaves a remainder of ${a % b}`)
}


//Checking a string
//Write a conditional that checks if a string is empty
//If it is console log 'Please type something'
//If it is not console log the string

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
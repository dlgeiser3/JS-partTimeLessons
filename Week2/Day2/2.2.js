// TO DO
//Assign REPL

// FIZZBUZZ FOR LOOP

// Create a variable named FB that contains a number
// Create a for loop that counts from 0 to 100

// Within the for loop write a conditional that checks each number and: 
// Prints out "Fizz" if the number is divisible by 3
// Prints out "Buzz" if the number is divisible by 5
// Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
// Prints out the number if it is not divisible by 3 or 5


function fizzBuzz() {
  for (let i = 0; i <= 100; i++) {
    if (i % 15 == 0) {
      console.log('FizzBuzz');
    }
    else if (i % 3 == 0) {
      console.log('Fizz');
    }
    else if (i % 5 == 0) {
      console.log('Buzz');
    }
    else {
      console.log(i);
    }
  }
}

fizzBuzz();



//PALINDROME CHALLENGE

// Create a function that accepts a string as a parameter
// within the function write a conditional that checks if the word is the is the same forwards and backwards
// If it is the same both ways console.log 'The string is a palindrome'
// If it is not console.log it is not a palindrome

let string = 'radar'

function checker(word) {
  let str = word.toLowerCase();
  let rev = str.split('').reverse().join('');
  // console.log(rev)
  if (str == rev) {
    console.log(`${str} is a palindrome`);
  } else {
    console.log(`${str} is not a palindrome`);
  }
}

checker(string)
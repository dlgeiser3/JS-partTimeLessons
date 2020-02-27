// COUNTING SUM CHALLENGE

// Write a function that adds together all the numbers between any two numbers.
// Your function will accept two parameters. One for the starting number and another for the ending number.
// console.log the final sum of the numbers. 

//Results for testing
countingSum(1, 100) // = 5050
countingSum(35, 77) // = 2408
countingSum(234, 567) // = 133767


// Solution
function countingSum(start, stop) {
  let sum = start;
  for (i = start + 1; i <= stop; i++) {
    sum += i
    // console.log(sum)
  }
  console.log(sum)
}

countingSum(1, 100) // = 5050
countingSum(35, 77) // = 2408
countingSum(234, 567) // = 133767




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



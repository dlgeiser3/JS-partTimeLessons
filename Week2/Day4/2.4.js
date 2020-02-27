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
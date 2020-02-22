// FIZZBUZZ FOR LOOP FUNCTION CHALLENGE
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



//PALINDRONE CHALLENGE

let string = 'apple'

function checker(word) {
  let str = word.toLowerCase();
  let rev = str.split('').reverse().join('');
  console.log(rev)
  if (str == rev) {
    console.log("It's a palindrome");
  } else {
    console.log(`${str} is not a palindrome`);
  }
}

checker(string)
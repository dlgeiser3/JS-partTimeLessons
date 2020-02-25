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





// ************************************************************
//   *************** DAY 2 LIGHTNING ROUNDS ***************
// ************************************************************



// QUESTION
// Write a function that accepts two numbers as parameters 
// console.log the sum of the two numbers




//ANSWER
function add(a, b) {
  console.log(a + b)
}

add(3, 6)


function add(a, b) {
  let sum = (a + b)
  console.log(sum)
}

add(3, 6)


// QUESTION
// Write a for loop that counts to 20 by 2




// ANSWER
for(i = 0; i <= 20; i += 2){
  console.log(i)
}




// QUESTION
// Write a function that accepts a name parameter and console.logs 'Hi name!'
// Invoke that function




// ANSWER
function sayHi(name) {
  console.log(`Hi ${name}!`)
}

sayHi('Finn')



// QUESTION
// Write a function that counts to 10 and console.logs each number





// ANSWER
function count() {
  for(i = 0; i <= 10; i++ ){
    console.log(i)
  }
}

count()



// QUESTION
// Write an fat arrow function





//ANSWER
let mario = ( ) => { console.log("It's a me, Mario!") }

mario( );



// QUESTION
// Write a function that accepts a parameter of movie. Using string interpolation console log your favorite movie.




// ANSWER
function favMovie(movie) {
  console.log(`My favorite movie is ${movie}`)
}

favMovie('Spirited Away')



// QUESTION
// Using the following array, write a for loop that logs each item in the array.
let characters = ['Link', 'Zelda', 'Gannon', 'Navi']






// ANSWER
let characters = ['Mario', 'Luigi', 'Peach', 'Bowser']

for (char of characters) {
  console.log(char)
}



// QUESTION
//Use a for in loop to console.log each of the keys in the following object

let character = { 
  name:"Link", 
  isZelda: false, 
  weapon: "Sword", 
  hearts: 10 
  };

  for(item in character){
    console.log(`${item}`)
  }
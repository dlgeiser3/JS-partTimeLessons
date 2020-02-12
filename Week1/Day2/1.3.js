//To Do
//Assign Terminal Dungeon


// CHALLENGE 1
// Who's name is longer?
// Write two variables. One will store your name and another will store a friend's name
// Write a conditional that checks who's name is longer
// Using string interpolation say whether your friend's name is shorter, longer or 
// if it is the same length as yours
// Say how much longer or shorter the person's name is

let myName = 'Danielle'
let friend = 'Ing'

if (myName.length > friend.length) {
  let letters = myName.length - friend.length
  console.log(`${friend}'s name is shorter than mine by ${letters} letters.`)
} else if (myName.length < friend.length){
  let letters = friend.length - myName.length
  console.log(`${friend}'s name is longer than mine by ${letters} letters.`)
} else {
  console.log('Our names our the same length!')
}


// CHALLENGE 2
// Write an Object that contains a string, number, boolean, and object
// Write a conditional that checks the type of each value stored in the object 
// and console logs the data type
// If the value is not a string, number, boolean, or object console log 'What are you?!'
// Rewrite this as a ternary


let object = {
  string: 'test',
  number: 10,
  boolean: false,
  object: {key: 'sample'}
}

let value = object.boolean;

if (typeof value === 'string'){
  console.log('this value is a string');
} else if (typeof value === 'number'){
  console.log('this value is a number');
} else if (typeof value === 'boolean'){
  console.log('this value is a boolean');
} else if (typeof value === 'object'){
  console.log('this value is an object');
} else {
  console.log('What are you?!')
}

// console.log(typeof value === 'string' ? 'this value is a string'
//   : typeof value === 'number' ? 'this value is a number'
//   : typeof value === 'boolean' ? 'this value is a boolean'
//   : typeof value === 'object' ? 'this value is an object'
//   : typeof value === 'function' ? 'this value is a function'
//   : 'what are you?!')




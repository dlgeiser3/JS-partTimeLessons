//To Do
//Assign Terminal Dungeon


// CHALLENGE 1
// Who's name is longer?

/* BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.
 */

/* SILVER
Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
*/

/* GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
*/

let myName = 'Danielle'
let friend = 'Adam'

if (myName.length > friend.length) {
  let letters = myName.length - friend.length
  console.log(`${friend}'s name is shorter than mine by ${letters} letters.`)
} else if (myName.length < friend.length) {
  let letters = friend.length - myName.length
  console.log(`${friend}'s name is longer than mine by ${letters} letters.`)
} else {
  console.log('Our names our the same length!')
}


// CHALLENGE 2
// Types Challenge

/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
 */

/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
 */

/* GOLD 
Rewrite this as a ternary
*/


let object = {
  string: 'test',
  number: 10,
  boolean: false,
  obj: { key: 'sample' }
}

let value = object.boolean;

if (typeof value === 'string') {
  console.log('this value is a string');
} else if (typeof value === 'number') {
  console.log('this value is a number');
} else if (typeof value === 'boolean') {
  console.log('this value is a boolean');
} else if (typeof value === 'object') {
  console.log('this value is an object');
} else {
  console.log('What are you?!')
}

console.log(typeof value === 'string' ? 'this value is a string'
  : typeof value === 'number' ? 'this value is a number'
  : typeof value === 'boolean' ? 'this value is a boolean'
  : typeof value === 'object' ? 'this value is an object'
  : typeof value === 'function' ? 'this value is a function'
  : 'what are you?!')

  // console.log(arr instanceof Array)


// switch (true) {
//   case (typeof value === 'string'):
//     console.log('this value is a string');
//     break;
//   case (typeof value === 'number'):
//     console.log('this value is a number');
//     break;
//   case (typeof value === 'boolean'):
//     console.log('this value is a boolean');
//     break;
//   case (typeof value === 'boolean'):
//     console.log('this value is an object');
//     break;
//   default:
//     console.log('What are you?!')
// }


//CHECKING AN ARRAY
// let arr = [1,2,3]




// ******************** Assign Terminal Dungeon ************************
// Mention week 2 videos due Tuesday Feb 25




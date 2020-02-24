//HOISTING MINI LESSON

/* All declarations (function, var, let, const and class) are hoisted in JavaScript, while the var declarations are initialized with undefined , but let and const declarations remain uninitialized. They will only get initialized when their lexical binding (assignment) is evaluated during runtime by the JavaScript engine. */

//Two steps JS goes through. The first is storing things in memory. Functions are stored in memory in their entirety. Var only stores declaration. 
//Next the code is executed. This is when assignment operators are used to give value to declared var. 

console.log(num)
sayHi();

var num = 12;


function sayHi() {
  console.log('Hi!!')
  // var a = 'hello'
  // console.log(a)
}




//SCOPE MINI LESSON
let myVar = 1;

function b() {
  console.log(myVar);
}

function a() {
  let myVar = 2;
  b();
}

a();
// 1 will console log. Each function has it's own scope. b() is looking at it's outer environment (the global scope) and pulling that variable information from there. Function b sits in the global environment NOT in function A. It is only being called in A. Regardless of where it is called it will still behave the same way because of where it sits in the code. 


function a() {

  function b() {
    console.log(myVar);
  }

  let myVar = 2;
  b();
}

let myVar = 1;
a();

// b();   This will not work because function b() is inside a() and global does not have access to it




function a() {
  console.log(myVar);

  function b() {
    let myVar = 2;
  }

  b();
}

// let myVar = 1;
a();


//Let uses Block scoping so the above will not work
//'Blocks' are defined by curly braces (in functions, for loops etc)
//Can shift myVar into a() from b() and it will work




// https://www.w3schools.com/js/js_let.asp
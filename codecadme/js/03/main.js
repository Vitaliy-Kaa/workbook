//  Scope  

function myFunction() {
  
  var pizzaName = "Volvo";
  // Code here can use pizzaName
  
}

// Code here can't use pizzaName

//---------------

const isLoggedIn = true;

if (isLoggedIn == true) {
  const statusMessage = 'User is logged in.';
}

console.log(statusMessage);

// Uncaught ReferenceError: statusMessage is not defined. It works inside {}


//-------------

// Variable declared globally
const color = 'blue';

function printColor() {
  console.log(color);
}

printColor(); // Prints: blue
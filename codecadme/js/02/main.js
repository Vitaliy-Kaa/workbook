// function  *************

function sayThanks(){
  console.log('Thank you for your purchase! We appreciate your business.');
}

 sayThanks();
 sayThanks();sayThanks();


//--------------
function sayThanks(name) {
  console.log(`Thank you for your purchase ${name}! We appreciate your business.`);
}

sayThanks('Cole');


// default parameters **********
function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

makeShoppingList('Xleb');


// return   ********************
function monitorCount(rows, columns) {
  return (rows * columns);
}

const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);


// helper function  ******************
function multiplyByNineFifths(number) {
  return number * (9/5);
};

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};

getFahrenheit(15); // Returns 59


//********************
const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
}
console.log(plantNeedsWater('Wednesday'));

// arrow function  -----------------
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};


// -----------------
const squareNum = (num) => {
  return num * num;
}; 
// same : 
const squareNum = num => num * num;


//**************************************

// Defining the function:
function sum(num1, num2) {
  return num1 + num2;
}

// Calling the function:
sum(3, 6); // 9

//****************************

// The parameter is name
function sayHello(name) {
  return `Hello, ${name}!`;
}

//------------

// With return
function sum(num1, num2) {
  return num1 + num2;
}

// Without return, so the function doesn't output the sum
function sum(num1, num2) {
  num1 + num2;
}

//-------------

// Named function
function rocketToMars() {
  return 'BOOM!';
}

// Anonymous function
const rocketToMars = function() {
  return 'BOOM!';
}

//----------------- Function expressions

const dog = function() {
  return 'Woof!';
}

//--------------------

// Arrow function with two arguments 
const sum = (firstParam, secondParam) => { 
  return firstParam + secondParam; 
}; 
console.log(sum(2,5)); // Prints: 7 

// Arrow function with no arguments 
const printHello = () => { 
  console.log('hello'); 
}; 
printHello(); // Prints: hello

// Arrow functions with a single argument 
const checkWeight = weight => { 
  console.log(`Baggage weight : ${weight} kilograms.`); 
}; 
checkWeight(25); // Prints: Baggage weight : 25 kilograms.


// Concise arrow functions
const multiply = (a, b) => a * b; 
console.log(multiply(2, 30)); // Prints: 60 
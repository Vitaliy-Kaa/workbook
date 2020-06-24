// if  ************************

if (true) {
  console.log('This message will print!'); 
}
// Prints: This message will print!


let sale = false;
if (sale) {
  console.log('Time to buy!')
}


// if...else   ****************************

if (false) {
  console.log('The code in this block will not run.');
} else {
  console.log('But the code in this block will!');
}
// Prints: But the code in this block will!


let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.')
}


// Ternary Operator  ***********************

let isNightTime = true;
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}
//------ Same :
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

//-----

let isLocked = false;

isLocked ?
  console.log('You will need a key to open the door.')
:
  console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ?
  console.log('I love that!') :
  console.log("I don't love that!");


// else if  **************************
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}


//  switch  ***************

let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
  case 'first place':
    console.log ('You get the gold medal!');
    break;
  case 'second place':
    console.log ('You get the silver medal!');
    break;
  case 'third place':
    console.log ('You get the bronze medal!');
    break;
  default:
    console.log ('No medal awarded.');
    break;
}
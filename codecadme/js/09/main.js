// Import Javascript modules with the require function
var moduleA = require( "./module-a.js" );

// The .js extension is optional
var moduleA = require( "./module-a" );
// Both ways will produce the same result.

// Now the functionality of moduleA can be used
console.log(moduleA.someFunctionality)


// ***  Javascript export default  ****
// module "moduleA.js"
export default function cube(x) {
  return x * x * x;
}

// In main.js
import cube from './moduleA.js';
// Now the `cube` function can be used straightforwardly.
console.log(cube(3)); // 27


//  ******  Using the import keyword in Javascript  *****
// add.js
export const add = (x, y) => {
    return x + y
}


// main.js
import { add } from './add';
console.log(add(2, 3)); // 5
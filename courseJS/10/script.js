const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = ['a', 'b', 'c', 'd', 'e', 'f'];
a.push(10, 11, 12, 44, 55);
console.log(a.length);
console.log(a);

b.push('j', 'g');
console.log(b);

console.log(b.pop());
b.pop();
console.log(b);

//  -------   delete item in the middle of array
delete a[3];
console.log(a);  // [1, 2, 3, empty, 5, 6, 7, 8, 9, 10, 11, 12, 44, 55]

// a.splice(3, 4);
// console.log(a);  //  [1, 2, 3, 8, 9, 10, 11, 12, 44, 55]

a.splice(3, 4, 71, 72, 73, 74, 75, 76);
console.log(a);  //  [1, 2, 3, 71, 72, 73, 74, 75, 76, 8, 9, 10, 11, 12, 44, 55]


b.shift();
console.log(b);  // ["b", "c", "d", "e", "f"]

b.unshift('o');
console.log(b);   //  ["o", "b", "c", "d", "e", "f"]
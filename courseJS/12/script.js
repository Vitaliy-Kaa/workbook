const a = {
    "a": 5,
    "b": 'Hello',
    "z2": 'Hi',
    y43: 1999,
    'villa de': 3040,
};

delete a.a;

console.log(a);
console.log(a.z2);

let k = 'y43';
console.log(a[k]);

a.yyy = 777;
a.b = 'Hey';
console.log(a);
//document.querySelector('.out').innerHTML = a;   //  [object Object]

// let out = '';                      // out  keys
// for (let key in a) {
//     out += key + "<br>";
// }
// document.querySelector('.out').innerHTML = out;

// let out = '';                      // out  values
// for (let key in a) {
//     out += a[key] + "<br>";
// }
// document.querySelector('.out').innerHTML = out;

let out = '';                      // out  keys and values
for (let key in a) {
    out += key + "  ==>  " + a[key] + "<br>";
}
document.querySelector('.out').innerHTML = out;
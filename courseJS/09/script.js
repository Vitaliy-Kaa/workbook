// let a = 'Ivan';
// let b = 37;
// let z7 = 'Lion';
// let c = ['Ivan', 37, 'Lion'];
// let d = [];
// console.log(c[0]);   // Ivan
// console.log(c[5]);  // undefined
// console.log(c);
// console.log(c.length);  //  3

// let zodiac = ['Kozerog', 1, 1, 19];
// console.log(zodiac);
// console.log(`Dlinna massiva ${zodiac.length}`);

// let man = ['Ivan', 'male', 176, 93, 'Ivanov'];
// console.log(man);
// console.log(`Dlinna massiva ${man.length}`);
// man[0] = 'Sergey';
// console.log(man);

//--------------------

// let a = [1, 2, 3, 4];
// console.log(a);

// let t = a[0];
// a[0] = a[3];
// console.log(a);

// a[3] = t;
// console.log(a);

//----same-------------
let a = [1, 2, 3, 4];
console.log(a);

let t = a[0];
a[0] = a[a.length - 1];
console.log(a);

a[a.length - 1] = t;
console.log(a);
console.log(a[888]);
a[888] = 7;
console.log(a);
console.log(a[888]);

// for (let i = 0; i < a.length; i++) {
//     document.querySelector('.out-1').innerHTML += a[i] + ' ';
// }

//  ----- more effective-------

// let out = '';
// for (let i = 0; i < a.length; i++) {
//     out += a[i] + ' ';
// }
// document.querySelector('.out-1').innerHTML = out;

// ----- chetn  ----------
let out = '';
for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
        out += a[i] + ' ';
    }
}
document.querySelector('.out-1').innerHTML = out;

// --------  max min ------------
let b = [2, 5, 27, 13, 9, 3, 56, 5, 88, -207];
let max = b[0];
for (let i = 0; i < b.length; i++) {
    if (max < b[i]) {
        max = b[i]
    }
}
console.log(max);

// ---------- sum ----------
let sum = 0;
for (let i = 0; i < b.length; i++) {
    //   sum += +b[i];
    sum = sum + b[i];
}
console.log(`summ of arr b = ${sum}`);
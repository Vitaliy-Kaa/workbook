function one() {
    console.log('work');
}

one();

let f1 = document.querySelector('.f1');
//f1.addEventListener('click', one);

// f1.onclick = one;

f1.onclick = function () {
    console.log('Hello');
}

console.log(1 + one()); // NaN
console.log(one());   // Undefined   -> becouse func one() don't return nothing


function two() {
    console.log('work 2');
    return 54;
}

two();
console.log(1 + two());

let a = 8;
let b = 8;

function multi() {
    console.log(a * b);
    return a * b;
}

multi();

let c1 = multi();
let c2 = 10 * multi();
console.log(c1, c2);

function multi2(x = 3, y = 4) {
    return x * y;
}

console.log(multi2());

console.log(multi2(4, 7));
console.log(multi2(4, a));

const f2 = document.querySelector('.f2');
//console.log(f2);
f2.onclick = () => {
    console.log('fun2');
}
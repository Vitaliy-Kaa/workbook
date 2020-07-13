let a = [5, 6, 7];
let b = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

//console.log(b);

// for (let i = 0; i < b.length; i++) {
//     //console.log(b[i]);
//     let c = b[i];
//     for (let j = 0; j < c.length; j++) {
//         console.log(c[j]);

//     }
// }

// --- back ---
// for (let i = 0; i < b.length; i++) {
//     //console.log(b[i]);
//     let c = b[i];
//     for (let j = c.length - 1; j >= 0; j--) {
//         console.log(c[j]);

//     }
// }

let out = '';
for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < b[i].length; j++) {
        console.log(b[i][j]);
        out += b[i][j] + ' ';
    }
    out += '<br>';
}
document.querySelector('.out').innerHTML = out;


// ---- move 1 to right -------

let d = [1, 0, 0, 0, 0, 0];
document.querySelector('.out2').innerHTML = (d);

let k = 0;

document.querySelector('button').onclick = () => {
    if (k < d.length - 1) {
        d[k] = 0;
        d[k + 1] = 1;
        k++;
        document.querySelector('.out2').innerHTML = (d);
    }
}
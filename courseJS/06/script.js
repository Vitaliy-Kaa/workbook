let out = document.querySelector('.out');
console.log(out);

// for (let i = 0; i < 5; i++) {
//     out.innerHTML += `${i}. `
//     for (let j = 0; j < 10; j++) {
//         out.innerHTML += j;     //  '*'

//     }
//     out.innerHTML += '<br>';
// }

//  ***   multiplication table  ***
for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {

        out.innerHTML += `${i} * ${j} = ${j * i} <br>`;
    }
    out.innerHTML += ` <hr>`;
}
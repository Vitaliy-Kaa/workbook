// for (let i = 0; i < 5; i++) {
//     if (i == 4) break;
//     console.log(i);
// }

// let div = document.querySelectorAll('.one');
// console.log(div);
// // div.style.background = 'red';

// for (let i = 0; i < div.length; i++) {
//     div[i].style.background = 'red';
//     div[i].onclick = two;
// }

// function two() {
//     console.log('Work!!!');
// }

// let b = document.getElementsByClassName('one');
// let c = document.getElementsByTagName('div');
// console.log(b);
// console.log(c);

// for (let i = 0; i < b.length; i++) {
//     // b[i].style.border = '1px solid black';
//     c[i].style.border = '3px solid black';
// }



// let rb = document.getElementsByName('r');
// console.log(rb);

// let button = document.querySelector('button');
// console.log(button);

// button.onclick = () => {
//     for (let i = 0; i < rb.length; i++) {
//         console.log(rb[i].value);
//     }
// };


let rb = document.querySelectorAll('input[type="radio"]');
console.log(rb);

let button = document.querySelector('button');
console.log(button);

button.onclick = () => {
    for (let i = 0; i < rb.length; i++) {
        if (rb[i].checked) {
            console.log(rb[i].value);
        }

    }
};


let out = '';
for (let i = 0; i < 10; i++) {
    if (i == 6) continue;  //   пропускает
    out += i + ' ';
    // if (i == 6) break;       прерывает
}
document.querySelector('#out').innerHTML = out;


let str = '';
for (let i = 0; i < 5; i++) {
    //for (let j = 0; j < i; j++) {
    str += '*';
    console.log(str);
    // }

}
let a = 7;
let b = 'Hello';

let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');
let divOut = document.querySelector('div.out');

button.onclick = function () {
    let b = inputIn.value;   // let b = +inputIn.value;  ('+' - распознает как число)
    console.log(b + 2);
    divOut.innerHTML = b;   //   divOut.innerHTML = `<p>${b}</p>`;
    inputIn.value = '';
};

// console.log(inputIn);
// console.log(button);
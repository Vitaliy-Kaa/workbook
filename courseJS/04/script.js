// document.querySelector('button').onclick = () => {
//     console.log(document.querySelector('#one').value);
// }


// document.querySelector('button').onclick = () => {
//     console.log(document.querySelector('#one').value);

//     document.querySelector('button').style.backgroundColor = document.querySelector('#one').value;
// }


// document.querySelector('button').onclick = () => {
//     console.log(document.querySelector('#one').value);
// }

// document.querySelector('#one').oninput = () => {
//     // console.log(document.querySelector('#one').value);
//     document.querySelector('span').innerHTML = document.querySelector('#one').value
// }


// document.querySelector('#btn-1').onclick = () => {
//     console.log(document.querySelector('#i2').checked);
//     let myCheckbox = document.querySelector('#i2');
//     if (myCheckbox.checked == true) {
//         console.log(myCheckbox.value);
//     } else {
//         console.log(myCheckbox.checked)
//     }
// }

document.querySelector('#btn-2').onclick = (event) => {
    event.preventDefault();
    // let text = document.querySelector('#two');
    // console.log(document.querySelector('#two').value);
    // console.log(text.value);
    // text.value = 'Hello';
    let form = document.querySelector('form');
    console.log(form.n2.value);
    console.log(form.tree.value);
    console.log(form.elements.n2.value);
    console.log(form.elements.tree.value);
}
let inputIn = document.querySelector('.input-in');
const button = document.querySelector('button');
let out = document.querySelector('.out');

button.onclick = () => {
    let age = +inputIn.value;
    // if (age >= 18) {
    //     out.innerHTML = '<p>Welcome!</p>';
    // }
    // else {
    //     out.innerHTML = ('Bye bye...');
    // }
    // console.log(age);

    switch (age) {
        case 18: out.innerHTML = '<p>Welcome!</p>';

            break;
        case 19: out.innerHTML = '<p>Welcome!</p>';

            break;

        default: out.innerHTML = ('Bye bye...');
            break;
    }


}
const one = document.querySelector('.one');
console.log(one);

one.style.width = '100px';       // set style
one.style.paddingBottom = '40px';

one.classList.add('two', 'three');  // add class
one.classList.remove('three');      // remove class

const toggle = document.querySelector('.toggle');
toggle.onclick = function () {
    this.classList.toggle('three');
}

// attribute

console.log(one.getAttribute('data'));
const ref = document.querySelector('link').getAttribute('href');
console.log(ref);

// if a few 'link' :
const ref2 = document.querySelectorAll('link')[1].getAttribute('href');
console.log(ref2);

one.setAttribute('data-num', 7);

//----gas------

let gas = document.querySelectorAll('.gas');
for (let i = 0; i < gas.length; i++) {
    gas[i].onclick = function () {
        let gallons = document.querySelector('.gallons').value;
        let amount = this.getAttribute('data') * gallons;
        console.log(amount);
    }

}

//---- create HTML element

let a = document.createElement('div');
a.innerHTML = 'Helloo';
a.classList.add('one');
a.onclick = function () {
    alert('Hello');
}
console.log(a);
document.querySelector('.test').appendChild(a);  //  show element on page
//document.querySelector('body').appendChild(a);
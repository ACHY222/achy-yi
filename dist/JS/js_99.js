let main = document.querySelector('#main');


let lis = document.querySelectorAll('#menu li');
console.log(lis);

let num1 = document.querySelector('#num-1');
let shoeBtn = document.querySelector('#show-btn');
showBtn.addEventListener('click', () => {
    num1.value = 'ABC';
})
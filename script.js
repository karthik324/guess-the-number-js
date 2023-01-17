'use strict';
/*
console.log(document.querySelector('.message'));
document.querySelector('.message').textContent = 'Hoi';
document.querySelector('.guess').value = 18;
console.log(document.querySelector('.guess').value);
*/

document.querySelector('.check').addEventListener('click', function (event) {
    console.log(document.querySelector('.guess').value);
    console.log(event);
});

'use strict'

let body = document.querySelector('body');

function openCloseItem(clas) {
  body.classList.toggle(clas);
}


document.querySelector('.menu-button').onclick = function () {
  openCloseItem('menu-open')
}

document.querySelector('.menu-close-button').onclick = function () {
  openCloseItem('menu-open')
}

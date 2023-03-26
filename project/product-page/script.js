'use strict'

function switchVarints(target) {
  let parent = target.parentNode;
  let container = parent.children;

  for (let box of container) {
    box.classList.remove("active-variant");
  }

  target.classList.add("active-variant");
}


document.querySelector('.product-options').addEventListener('click', function (event) {
  let target = event.target;
// Чекбоксы в опциях
  if (target.classList.contains('check-mark') ||
      target.classList.contains('check-mark-img') ||
      target.classList.contains('check-mark-p')) {

    let parent = target.parentNode.parentNode;
    let container = parent.children;

    for (let box of container) {
      box.classList.remove("check-box-active");
    }

    target.parentNode.classList.add("check-box-active");

  }

  // варианты в опциях
  if (target.classList.contains('options-variant')) {
    switchVarints(target);
  }
  //варианты, если нажать на <p>
  if (target.classList.contains('options-variant-p')) {
    target = target.parentNode;
    switchVarints(target);
  }

});


document.querySelector('.characteristics').addEventListener('click', function(event) {
  let container = event.target.parentNode.children;
  for (let box of container) {
    box.classList.remove("active-switcher");
  }

  event.target.classList.add("active-switcher");

  document.querySelector('.characteristics-container').classList.remove('hidden');
  document.querySelector('.accessories-container').classList.add('hidden');

});


document.querySelector('.accessories').addEventListener('click', function(event) {
  let container = event.target.parentNode.children;
  for (let box of container) {
    box.classList.remove("active-switcher");
  }

  event.target.classList.add("active-switcher");


  document.querySelector('.accessories-container').classList.remove('hidden');
  document.querySelector('.characteristics-container').classList.add('hidden');

});

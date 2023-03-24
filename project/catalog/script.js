
document.querySelector('.filter-open-button').onclick = function () {
  openCloseItem('filter-open');
}

document.querySelector('.close-icon').onclick = function () {
  openCloseItem('filter-open');
}



// Дроп даун открыть закрыть

document.querySelector('.filter').addEventListener('click', function (event) {
  let target = event.target;
  let isItIcon = target.classList.contains('dropdown-icon');
  let isItCheckBox = target.parentNode.parentNode.classList.contains('check-box');
  if (isItIcon) {
    target.parentNode.parentNode.classList.toggle('dropdown-closed');
  } else if (isItCheckBox) {
    target.parentNode.parentNode.classList.toggle('check-box-active');
    }
});

// NOTE: Не србатывает на верхних чекбоксах.

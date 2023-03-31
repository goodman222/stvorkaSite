function changeCheckBox(event) { //переключение чек-боксов
  let target = event.target;

  if (target.classList.contains('check-box-item'))//при нажатии на контейнер
      {
        let container = target.parentNode.parentNode.children;
        for (let box of container) {
          box.classList.remove("check-box-active");
        }
        target.parentNode.classList.add("check-box-active");
      }

      else if (target.classList.contains('check-mark') ||  //при нажатии на квадратик
      target.classList.contains('check-text')) { // или текст рядом
        let container = target.parentNode.parentNode.parentNode.children;
        for (let box of container) {
          box.classList.remove("check-box-active");
        }
        target.parentNode.parentNode.classList.add("check-box-active");
      }
}


let checkBoxes = document.querySelectorAll('.check-box-container');
for (var item of checkBoxes) {
  item.addEventListener('click', (event) => { changeCheckBox (event)
  });
}

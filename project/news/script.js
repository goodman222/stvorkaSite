let switcher = document.querySelector('.switcher');


switcher.onclick = function (event) {
  console.log(event.target);
  if (!event.target.classList.contains('active-switcher'))  {
    for (var item of switcher.children) {
      item.classList.toggle('active-switcher');
    }

    document.querySelector('.news-container').classList.toggle('active-item');
    document.querySelector('.articles-container').classList.toggle('active-item');
  }

}

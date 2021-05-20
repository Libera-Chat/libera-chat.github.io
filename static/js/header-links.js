document.querySelectorAll('main :is(h2, h3, h4, h5, h6)')
  .forEach(el => {
    el.innerHTML = `<a href="#${el.id}">${el.innerHTML}</a>`
  })

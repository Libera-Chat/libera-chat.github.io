document.querySelectorAll('main :is(h2, h3, h4, h5, h6)')
  .forEach(el => {
    if (!el.id) return
    el.innerHTML = `<a href="#${el.id}">${el.innerHTML}</a>`
  })

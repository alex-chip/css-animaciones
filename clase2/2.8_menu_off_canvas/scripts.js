const d = document
const toggleMenu = d.getElementById('toggle-menu')

toggleMenu.addEventListener('click', () => {
  const b = d.body
  b.classList.toggle('translate')
  b.classList.add('overflow-hidden')

  b.addEventListener('transitionend', () => {
    if (!b.classList.contains('translate')) b.classList.remove('overflow-hidden')
  })
})

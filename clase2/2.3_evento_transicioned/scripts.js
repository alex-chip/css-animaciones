const d = document
const button = d.getElementById('button')
const ball = d.getElementById('ball')

button.addEventListener('click', () => {
  d.body.classList.add('animate')
  ball.addEventListener('transitionend', e => {
    if (e.elapsedTime === 1) d.body.classList.remove('animate')
    // console.log(e)
  })
})

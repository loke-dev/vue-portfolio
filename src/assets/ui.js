export function popUp (text, size, animation, e) {
  let popUp = document.createElement('div')
  popUp.innerHTML = text

  Object.assign(popUp.style, {
    position: 'absolute',
    top: `${e.clientY}px`,
    left: `${e.clientX}px`,
    fontSize: size,
    fontWeight: 'bold',
    color: 'black',
    userSelect: 'none',
    pointerEvents: 'none'
  })

  document.body.appendChild(popUp)
  popUp.classList.add('animated', animation)
}

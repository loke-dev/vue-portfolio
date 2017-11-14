export default function (el, animationCSS, duration = 100) {
  el.classList.add(animationCSS)

  setTimeout(() => {
    el.classList.remove(animationCSS)
  }, duration)
}

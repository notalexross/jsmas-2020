const js =
`const buttons = document.querySelectorAll('.previous, .next')
const gallery = document.querySelector('.gallery')
const numSlides = gallery.children.length
let currentSlide = 0

const handleCarouselNavigation = function() {    
  currentSlide += this.classList.contains('previous') ? -1 : 1
  buttons.forEach(btn => btn.classList.remove('disabled'))
  currentSlide % (numSlides - 1) || this.classList.add('disabled')
  gallery.style.transform = \`translateX(\${-currentSlide * 220}px)\`
}

buttons.forEach(btn => btn.addEventListener('click', handleCarouselNavigation))`

export default js
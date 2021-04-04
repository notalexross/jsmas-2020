const js = `const nSlides = 20
const timeSlide = 2000

const valueContainers = document.querySelectorAll('.dice-value')
const diceContainer = document.querySelector('#dice-container')
const diceStrip = document.querySelector('#dice-strip')
const templates = document.querySelector('#templates').children

const frameTime = timeSlide / nSlides
let timeout

const getRandomValues = (nValues = 3) => {
  const values = []
  for (let i = 0; i < nValues - 1; i++) {
    const randomValue = Math.floor(Math.random() * 6)
    values.push(randomValue)
  }
  return values
}

const populateStrip = (nValues = 3) => {
  const lastDie = diceStrip.lastElementChild
  diceStrip.innerHTML = ''
  diceStrip.appendChild(lastDie)
  const values = getRandomValues(nValues)
  values.forEach(value => {
    const die = templates[value].cloneNode(true)
    diceStrip.appendChild(die)
  })
  return values
}

const animateDice = () => {
  diceStrip.style.transition = 'none'
  diceStrip.style.top = '0'
  setTimeout(() => {
    diceStrip.style.transition = \`top \${timeSlide}ms cubic-bezier(.27,.01,0,1.13)\`
    diceStrip.style.top = \`\${-100 * (nSlides - 1)}%\`
  }, 10)
}

const animateValues = (values, time = 10, currentIndex = 0) => {
  valueContainers.forEach(container => {
    container.innerHTML = values[currentIndex] + 1
  })
  if (currentIndex < values.length - 1) {
    timeout = setTimeout(() => {
      animateValues(values, time, currentIndex + 1)
    }, time)
  }
}

const handleClick = () => {
  clearTimeout(timeout)
  const values = populateStrip(nSlides)
  animateDice()
  animateValues(values, frameTime)
}

diceContainer.addEventListener('click', handleClick)`

export default js

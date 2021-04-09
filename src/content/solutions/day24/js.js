const js = `let pushed = false
let targetInt
const spinningElem = document.getElementById('spinning')
const targetElem = document.getElementById('targetNum')
const result = document.getElementById('result')

function buttonPressed() {
  pushed = true
}

function setTargetInt() {
  targetInt = Math.floor(Math.random() * 101)
  targetElem.innerHTML = targetInt
}

const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds))

function stop(i) {
  const offBy = Math.abs(targetInt - i)
  let message = ''
  if (offBy) {
    message = \`Oh no, you lose! Off by \${offBy}\`
  } else {
    message = 'You Win!'
  }

  result.textContent = message
}

const spin = async () => {
  let count = 0
  while (!pushed) {
    count = (count + 1) % 101
    spinningElem.textContent = count
    await sleep(75)
  }

  stop(count)
}

document.getElementById('buttonPressed').addEventListener('click', buttonPressed)

setTargetInt()
spin()`

export default js

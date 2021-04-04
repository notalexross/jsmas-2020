const js = `const textInput = document.querySelector('#string')
const tweetBtn = document.querySelector('#btn')
const counter = document.querySelector('#counterFooter')

const handleKeyPress = function() {
  const remainingCharacters = 140 - this.value.length
  counter.textContent = \`\${remainingCharacters}/140\`
  if (remainingCharacters >= 0) {
    tweetBtn.classList.remove('buttonDisabled')
    if (remainingCharacters > 20) {
      counter.classList.remove('string-short')
    } else {
      counter.classList.add('string-short')
    }
  } else {
    tweetBtn.classList.add('buttonDisabled')
  }
}

textInput.addEventListener('input', handleKeyPress)`

export default js

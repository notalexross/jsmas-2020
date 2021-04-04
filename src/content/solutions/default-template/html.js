/* eslint-disable import/no-unused-modules, indent */
const htmlTemplate = ({ title, functionName, paramLabels, Examples }) => {
  const html = `<div class="container">
  <h1>${title}</h1>
  <div class="flex-container">
    <div class="form-container">
      <form>${paramLabels
        .map((label, idx) => {
          const example = Examples[0].inputs[idx]
          const value = typeof example === 'object' ? JSON.stringify(example) : example
          return `
        <label for="input">(${String.fromCharCode(idx + 65)}) ${label}</label>
        <br>
        <input id="input" type="text" name="${String.fromCharCode(
          idx + 65
        )}" value='${value}'></input>
        <br>`
        })
        .join('')}
        <button>Calculate</button>
      </form>
    </div>
    <div class="examples-container">
      <h2>Examples</h2>
      <table>
        <thead>
          <tr>${paramLabels
            .map((_, idx) => {
              const value = String.fromCharCode(idx + 65)
              return `
            <th>${value}</th>`
            })
            .join('')}
            <th>Output</th>
          </tr>
        </thead>
        <tbody>${Examples.map(
          ({ inputs, output }) => `
          <tr>${inputs
            .map(input => {
              const value = typeof input === 'object' ? JSON.stringify(input) : input
              return `
            <td>${value}</td>`
            })
            .join('')}
            <td>${JSON.stringify(output, null, 1).replace(/\n /g, '').replace(/\n/g, '')}</td>
          </tr>`
        ).join('')}
        </tbody>
      </table>
    </div>
    <p class="output-container">
      Output: <span id="result">
        ${JSON.stringify(Examples[0].output, null, 1).replace(/\n /g, '').replace(/\n/g, '')}
      </span>
    </p>
  </div>
</div>
<script>
  const form = document.querySelector('form')
  const formInputs = document.querySelectorAll('form > input')
  const submitButton = document.querySelector('button')
  const output = document.querySelector('#result')
  const outputContainer = document.querySelector('.output-container')
  let timeoutId

  form.addEventListener('submit', function() {
    event.preventDefault()
    const data = new FormData(this)
    const values = []

    for (const value of data.values()) {
      try {
        values.push(JSON.parse(value))
      } catch {
        values.push(value.toString())
      }
    }

    const result = ${functionName}(...values)
    output.textContent = JSON.stringify(result, null, 1)
    
    outputContainer.classList.add('highlight')
    
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      outputContainer.classList.remove('highlight')
    }, 800)
  })

  formInputs.forEach(input => {
    input.addEventListener('click', () => {
      input.value = ''
      submitButton.disabled = true
    })
    input.addEventListener('keyup', () => {
      if (Array.from(formInputs).some(input => !input.value)) {
        submitButton.disabled = true
      } else {
        submitButton.disabled = false
      }
    })
  })
</script>`
  return html
}

export default htmlTemplate

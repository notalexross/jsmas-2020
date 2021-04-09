const js = `// single line solution with regex
function validTime(str) {
  return /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/.test(str)
}

// solution without Regex
function validTimeWithoutRegex(str) {
  const [hours, minutes] = str.split(':')

  return hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60 && !str.split('').includes('.')
}`

export default js

const js = `// using array methods
function reverseAString(str) {
  return str.split('').reverse().join('')
}

// without using array methods
function reverseAStringWithoutArrayMethods(str) {
  let reversedStr = ''
  for (let i = 0; i < str.length; i++) {
    reversedStr += str[str.length - i - 1]
  }

  return reversedStr
}`

export default js

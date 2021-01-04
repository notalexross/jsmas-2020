const js = `function reverseAString(str) {
  // using array methods:
  return str.split('').reverse().join('')
  
  // without using array methods:
  // let reversedStr = ''
  // for (i = 0; i < str.length; i++) {
  //     reversedStr += str[str.length - i - 1]
  // }
  // return reversedStr
}`

export default js
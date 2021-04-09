const js = `function countVowelConsonant(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']

  return str
    .split('')
    .reduce((acc, letter) => (vowels.includes(letter.toLowerCase()) ? acc + 1 : acc + 2), 0)
}`

export default js

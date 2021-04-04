const js = `function differentSymbolsNaive(str) {
  if (typeof str !== 'string') return
  return new Set(str.split('')).size
}`

export default js

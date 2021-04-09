const js = `function differentSymbolsNaive(str) {
  if (typeof str !== 'string') return null

  return new Set(str.split('')).size
}`

export default js

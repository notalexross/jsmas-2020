const js = `function chunkyMonkey(values, size) {
  const newValues = []
  for (let i = 0; i < values.length / size; i++) {
      newValues.push(values.slice(i * size, (i + 1) * size))
  }
  return newValues
}`

export default js
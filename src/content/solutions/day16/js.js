const js = `function insertDashes(str) {
  return str.split(' ').map(word => word.split('').join('-')).join(' ')
}`

export default js
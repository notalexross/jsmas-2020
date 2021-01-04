const js = `function validTime(str) {
  // regex single line solution
  return /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/.test(str)
  
  // no regex solution
  // const [ hours, minutes ] = str.split(':')
  // return hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60 && !str.split('').includes('.')
}`

export default js
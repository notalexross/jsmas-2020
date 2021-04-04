const js = `function alphabetSubsequence(str) {
  return !str.toLowerCase().split('').some((el, idx, arr) => idx && el <= arr[idx - 1])
}`

export default js

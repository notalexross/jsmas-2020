const js = `function sumOddFibonacciNumbers(num) {
  let sumOdd = 0
  let fibs = [0, 1]

  while (fibs[0] <= num) {
    if (fibs[0] % 2) sumOdd += fibs[0]
    fibs = [fibs[1], fibs[0] + fibs[1]]
  }

  return sumOdd
}`

export default js

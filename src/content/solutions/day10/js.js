const js = `function adjacentElementsProduct(nums) {
  return nums.reduce((acc, cur, idx, arr) => {
      const product = cur * arr[idx + 1]
      return product > acc ? product : acc
  }, -Infinity)
}`

export default js
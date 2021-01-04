const js = `function arrayPreviousLess(nums) {
  return nums.map((num, idx, arr) => (
      arr.slice(0, idx).reverse().find(el => el < num) || -1
  ))
}`

export default js
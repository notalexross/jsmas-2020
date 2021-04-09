const js = `function arrayMaximalAdjacentDifference(nums) {
  return nums.reduce((acc, cur, idx, arr) => {
    const absDiff = Math.abs(cur - arr[idx + 1])

    return absDiff > acc ? absDiff : acc
  }, 0)
}`

export default js

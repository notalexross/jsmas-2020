const js = `function avoidObstacles(nums) {
  for (i = 1; i <= Math.max(...nums, 0) + 1; i++) {
      if(!nums.some(el => el % i === 0)) return i
  }
}`

export default js

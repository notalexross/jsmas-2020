const js = `function depositProfit(deposit, rate, threshold) {
  return Math.ceil(Math.log(threshold / deposit) / Math.log(1 + rate / 100))
}`

export default js

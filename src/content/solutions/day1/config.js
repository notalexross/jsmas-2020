const config = {
  templateHtml: true,
  templateCss: true,
  title: 'Candies',
  functionName: 'candies',
  paramLabels: ['Number of children', 'Number of pieces of candy'],
  Examples: [
    {
      inputs: [3, 10],
      output: 9
    },
    {
      inputs: [2, 8],
      output: 8
    },
    {
      inputs: [2, 4],
      output: 4
    }
  ]
}

export default config

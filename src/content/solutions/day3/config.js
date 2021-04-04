const config = {
  templateHtml: true,
  templateCss: true,
  title: 'Chunky Monkey',
  functionName: 'chunkyMonkey',
  paramLabels: ['Values', 'Size'],
  Examples: [
    {
      inputs: [['a', 'b', 'c', 'd'], 2],
      output: [
        ['a', 'b'],
        ['c', 'd']
      ]
    },
    {
      inputs: [[0, 1, 2, 3, 4, 5], 4],
      output: [
        [0, 1, 2, 3],
        [4, 5]
      ]
    }
  ]
}

export default config

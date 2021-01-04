const config = {
  templateHtml: true,
  templateCss: true,
  title: 'Extract Matrix Column',
  functionName: 'extractMatrixColumn',
  paramLabels: ['Matrix', 'Column'],
  Examples: [
    {
      inputs: [[[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2],
      output: [1, 0, 3]
    }
  ]
}

export default config
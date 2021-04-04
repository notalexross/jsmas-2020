const config = {
  templateHtml: true,
  templateCss: true,
  title: 'Valid Time',
  functionName: 'validTime',
  paramLabels: ['Time'],
  Examples: [
    {
      inputs: ['13:58'],
      output: true
    },
    {
      inputs: ['25:51'],
      output: false
    },
    {
      inputs: ['02:76'],
      output: false
    }
  ]
}

export default config

const config = {
  templateHtml: true,
  templateCss: true,
  title: 'Sort By Length',
  functionName: 'sortByLength',
  paramLabels: ['Strings'],
  Examples: [
    {
      inputs: [['abc', '', 'aaa', 'a', 'zz']],
      output: ['', 'a', 'zz', 'abc', 'aaa']
    }
  ]
}

export default config

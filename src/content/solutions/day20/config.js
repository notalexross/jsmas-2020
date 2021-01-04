const config = {
  templateHtml: true,
  templateCss: true,
  title: 'Domain Type',
  functionName: 'domainType',
  paramLabels: ['Array of web addresses'],
  Examples: [
    {
      inputs: [['en.wiki.org', 'code.info']],
      output: ['organization','information']
    }
  ]
}

export default config
const js = `function domainType(domains) {
  const tlds = {
    com: 'commercial',
    org: 'organization',
    net: 'network',
    info: 'information'
  }

  return domains.map(domain => tlds[domain.split('.').pop()])
}`

export default js

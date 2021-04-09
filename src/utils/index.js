function getBlobUrl(code, type) {
  const blob = new Blob([code], { type })
  const blobUrl = URL.createObjectURL(blob)

  return blobUrl
}

// eslint-disable-next-line import/prefer-default-export
export function getGeneratedPageUrl({ html, css, js }) {
  const cssUrl = getBlobUrl(css, 'text/css')
  const jsUrl = getBlobUrl(js, 'text/javascript')

  const source = `
    <html>
      <head>
        ${css && `<link rel="stylesheet" type="text/css" href="${cssUrl}" />`}
        <base href="${window.location}">
      </head>
      <body>
        ${html || ''}
        ${js && `<script src="${jsUrl}"></script>`}
      </body>
    </html>
  `

  const generatedPageUrl = getBlobUrl(source, 'text/html')

  return generatedPageUrl
}

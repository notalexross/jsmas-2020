function getBlobURL(code, type) {
  const blob = new Blob([code], { type })
  return URL.createObjectURL(blob)
}

// eslint-disable-next-line import/prefer-default-export
export function getGeneratedPageURL({ html, css, js }) {
  const cssURL = getBlobURL(css, 'text/css')
  const jsURL = getBlobURL(js, 'text/javascript')

  const source = `
    <html>
      <head>
        ${css && `<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
        <base href="${window.location}">
      </head>
      <body>
        ${html || ''}
        ${js && `<script src="${jsURL}"></script>`}
      </body>
    </html>
  `

  return getBlobURL(source, 'text/html')
}

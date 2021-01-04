import { useState, useEffect } from 'react'
import { Sandbox } from '../components'

export default function SandboxContainer({ src, SetLoaded = () => null, title }) {
  const [ content, setContent ] = useState({})

  useEffect(() => {
    // TODO: Change useEffect callback to async rather than .then callback.
    import(`../${src}`).then(async data => {
      if (data.config) {
        if (data.config.templateHtml) {
          const { default: htmlTemplate } = await import('../content/solutions/default-template/html.js')
          data.html = htmlTemplate(data.config)
        }
        if (data.config.templateCss) {
          const { default: cssTemplate } = await import('../content/solutions/default-template/css.js')
          data.css = cssTemplate(data.config)
        }
      }
      const { config, ...content } = data
      setContent(content)
    }).catch(err => console.error(err))
  }, [])

  return (
    <Sandbox>
      <Sandbox.Editor>
        <Sandbox.Editor.TabsContainer>
          {Object.keys(content).map(file => 
            <Sandbox.Editor.Tab key={`tab-${file}`} id={file} isDefault={file === 'js'}>
              {file}
            </Sandbox.Editor.Tab>
          )}
        </Sandbox.Editor.TabsContainer>
        <Sandbox.Editor.PagesContainer>
          {Object.entries(content).map(([ file, content ]) => 
            <Sandbox.Editor.Page key={`page-${file}`} id={file} language={file}>
              {file === 'html' ? `<body>\n${content.replace(/^/gm, "  ")}\n</body>` : content}
            </Sandbox.Editor.Page>
          )}
        </Sandbox.Editor.PagesContainer>
      </Sandbox.Editor>
      <Sandbox.Document title={title} />
      {content.html && <SetLoaded />}
    </Sandbox>
  )
}
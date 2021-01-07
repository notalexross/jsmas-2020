import { useState, useEffect } from 'react'
import { Sandbox } from '../components'

export default function SandboxContainer({ src, SetLoaded = () => null, title }) {
  const [ content, setContent ] = useState({})

  useEffect(() => {
    let isCurrent = true;

    async function getHtmlFromTemplate(config) {
      if (config && config.templateHtml) {
        const { default: htmlTemplate } = await import('../content/solutions/default-template/html.js')
        return htmlTemplate(config)
      }
    }

    async function getCssFromTemplate(config) {
      if (config && config.templateCss) {
        const { default: cssTemplate } = await import('../content/solutions/default-template/css.js')
        return cssTemplate(config)
      }
    }

    async function importData() {
      try {
        const data = await import(`../${src}`)
        if (!data.html) data.html = await getHtmlFromTemplate(data.config)
        if (!data.css) data.css = await getCssFromTemplate(data.config)
        const { config, ...content } = data
        isCurrent && setContent(content)
      } catch (err) {
        console.error(err)
      }
    }

    importData()

    return () => isCurrent = false
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
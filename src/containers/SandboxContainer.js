// TODO: This doesn't work correctly in Firefox.
import { useState, useEffect } from 'react'
import { Sandbox } from '../components'

export default function SandboxContainer({ src, SetLoaded = () => null, title }) {
  const [content, setContent] = useState({})

  useEffect(() => {
    let isCurrent = true

    async function getHtmlFromTemplate(config) {
      if (config && config.templateHtml) {
        const { default: htmlTemplate } = await import(
          '../content/solutions/default-template/html.js'
        )
        return htmlTemplate(config)
      }
      return undefined
    }

    async function getCssFromTemplate(config) {
      if (config && config.templateCss) {
        const { default: cssTemplate } = await import(
          '../content/solutions/default-template/css.js'
        )
        return cssTemplate
      }
      return undefined
    }

    async function importData() {
      try {
        // eslint-disable-next-line prefer-template
        const { config, ...data } = await import('../' + src)
        if (!data.html) data.html = await getHtmlFromTemplate(config)
        if (!data.css) data.css = await getCssFromTemplate(config)
        isCurrent && setContent(data)
      } catch (err) {
        console.error(err)
      }
    }

    importData()

    return () => {
      isCurrent = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Sandbox>
      <Sandbox.Editor>
        <Sandbox.Editor.TabsContainer>
          {Object.keys(content).map(file => (
            <Sandbox.Editor.Tab key={`tab-${file}`} id={file} isDefault={file === 'js'}>
              {file.toUpperCase()}
            </Sandbox.Editor.Tab>
          ))}
        </Sandbox.Editor.TabsContainer>
        <Sandbox.Editor.PagesContainer>
          {Object.entries(content).map(([file, code]) => (
            <Sandbox.Editor.Page key={`page-${file}`} id={file} language={file}>
              {file === 'html' ? `<body>\n${code.replace(/^/gm, '  ')}\n</body>` : code}
            </Sandbox.Editor.Page>
          ))}
        </Sandbox.Editor.PagesContainer>
      </Sandbox.Editor>
      <Sandbox.Document title={title} content={content} />
      {content.html && <SetLoaded />}
    </Sandbox>
  )
}

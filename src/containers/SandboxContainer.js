import { useState, useEffect } from 'react'
import { Sandbox } from '../components'

export default function SandboxContainer({ src, title, SetLoadedComponent = () => null }) {
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

      return null
    }

    async function getCssFromTemplate(config) {
      if (config && config.templateCss) {
        const { default: cssTemplate } = await import(
          '../content/solutions/default-template/css.js'
        )

        return cssTemplate
      }

      return null
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
          {Object.keys(content).map(codeType => (
            <Sandbox.Editor.Tab key={`tab-${codeType}`} id={codeType} isDefault={codeType === 'js'}>
              {codeType.toUpperCase()}
            </Sandbox.Editor.Tab>
          ))}
        </Sandbox.Editor.TabsContainer>
        <Sandbox.Editor.PagesContainer>
          {Object.entries(content).map(([codeType, code]) => (
            <Sandbox.Editor.Page key={`page-${codeType}`} id={codeType} language={codeType}>
              {codeType === 'html' ? `<body>\n${code.replace(/^/gm, '  ')}\n</body>` : code}
            </Sandbox.Editor.Page>
          ))}
        </Sandbox.Editor.PagesContainer>
      </Sandbox.Editor>
      <Sandbox.Document title={title} content={content} />
      {content.html && <SetLoadedComponent />}
    </Sandbox>
  )
}

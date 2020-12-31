import { useState, useEffect } from 'react'
import { Sandbox } from '../components'

export default function SandboxContainer({ src, title }) {
  const [ content, setContent ] = useState({})

  useEffect(() => {
    import(`../${src}`).then(data => {
      setContent(data)
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
    </Sandbox>
  )
}
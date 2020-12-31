import { useState, useEffect } from 'react'
import { Sandbox } from '../components'

export default function SandboxContainer({ src }) {
  const [ content, setContent ] = useState({})

  useEffect(() => {
    import(`../${src}`).then(data => {
      console.log(data)
      setContent(data)
    }).catch(err => console.error(err))
  }, [])

  console.log(Object.keys(content))

  return (
    <Sandbox>
      <Sandbox.Editor>
        <Sandbox.Editor.TabsContainer>
          {Object.keys(content).map(file => 
            <Sandbox.Editor.Tab key={`tab-${file}`} id={file} isDefault={file === 'js'}>{file}</Sandbox.Editor.Tab>
          )}
        </Sandbox.Editor.TabsContainer>
        <Sandbox.Editor.PagesContainer>
          {Object.entries(content).map(([ file, content ]) => 
            <Sandbox.Editor.Page key={`page-${file}`} id={file} language={file}>{content}</Sandbox.Editor.Page>
          )}
        </Sandbox.Editor.PagesContainer>
      </Sandbox.Editor>
      <Sandbox.Document />
    </Sandbox>
  )
}
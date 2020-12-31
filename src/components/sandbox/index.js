import { useState, useEffect, createContext, useContext } from 'react'
import Prism from 'prismjs'
import "./styles/prism.css"
import { Container, Pre, Code, Editor, EditorTabsContainer, EditorPagesContainer, EditorPage, EditorTab, Doc } from './styles'

const SandboxContext = createContext()

export default function Sandbox({ children, ...restProps }) {
  const [ pages, setPages ] = useState([])
  const [ activePage, setActivePage ] = useState('')

  return (
    <SandboxContext.Provider value={{ pages, setPages, activePage, setActivePage }}>
      <Container {...restProps}>
        {children}
      </Container>
    </SandboxContext.Provider>
  )
}

Sandbox.Editor = function SandboxEditor({ children, ...restProps }) {
  return <Editor {...restProps}>{children}</Editor>
}

Sandbox.Editor.TabsContainer = function SandboxEditorTabsContainer({ children, ...restProps }) {
  return <EditorTabsContainer {...restProps}>{children}</EditorTabsContainer>
}

Sandbox.Editor.PagesContainer = function SandboxEditorPagesContainer({ children, ...restProps }) {
  return <EditorPagesContainer {...restProps}>{children}</EditorPagesContainer>
}

Sandbox.Editor.Page = function SandboxEditorPage({ id, language, children, ...restProps }) {
  const { activePage } = useContext(SandboxContext)

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <EditorPage hidden={activePage !== id} {...restProps}>
      <Pre>
        <Code className={language && `language-${language}`}>
          {children}
        </Code>
      </Pre>
    </EditorPage>
  )
}

Sandbox.Editor.Tab = function SandboxEditorTab({ id, isDefault = false, children, ...restProps }) {
  const { setPages, activePage, setActivePage } = useContext(SandboxContext)

  useEffect(() => {
    setPages(pages => [ ...pages, id ])
    isDefault && setActivePage(id)
  }, [])

  return <EditorTab isActive={activePage === id} onClick={() => setActivePage(id)} {...restProps}>{children}</EditorTab>
}

Sandbox.Document = function SandboxDocument({ children, ...restProps }) {
  return <Doc {...restProps}>{children}</Doc>
}




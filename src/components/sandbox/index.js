import { useState, useEffect, createContext, useContext, useRef } from 'react'
import Prism from 'prismjs'
import "./styles/prism.css"
import { getGeneratedPageURL } from '../../utils'
import { Container, Pre, Code, Editor, EditorTabsContainer, EditorPagesContainer, EditorPage, EditorTab, Doc } from './styles'

const EditorContext = createContext()

export default function Sandbox({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Sandbox.Editor = function SandboxEditor({ children, ...restProps }) {
  const [ activePage, setActivePage ] = useState('')

  return (
    <EditorContext.Provider value={{ activePage, setActivePage }}>
      <Editor {...restProps}>{children}</Editor>
    </EditorContext.Provider>
  )
}

Sandbox.Editor.TabsContainer = function SandboxEditorTabsContainer({ children, ...restProps }) {
  return <EditorTabsContainer {...restProps}>{children}</EditorTabsContainer>
}

Sandbox.Editor.PagesContainer = function SandboxEditorPagesContainer({ children, ...restProps }) {
  return <EditorPagesContainer {...restProps}>{children}</EditorPagesContainer>
}

Sandbox.Editor.Page = function SandboxEditorPage({ id, language, children, ...restProps }) {
  const { activePage } = useContext(EditorContext)

  useEffect(() => {
    Prism.highlightAll()
  }, [children])

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
  const { activePage, setActivePage } = useContext(EditorContext)

  useEffect(() => {
    isDefault && setActivePage(id)
  }, [id, isDefault, setActivePage])

  const handleClick = () => {
    setActivePage(id)
  }

  return (
    <EditorTab isActive={activePage === id} onClick={handleClick} {...restProps}>
      {children}
    </EditorTab>
  )
}

Sandbox.Document = function SandboxDocument({ title, content, ...restProps }) {
  const docRef = useRef()
  const url = getGeneratedPageURL(content)

  return (content.html ?
    <Doc ref={docRef} src={url} title={title} {...restProps}></Doc> :
    <Doc ref={docRef} title={title} {...restProps}></Doc>
  )
}




import { useState, useEffect, createContext, useContext, useRef } from 'react'
import Prism from 'prismjs'
import "./styles/prism.css"
import { Container, Pre, Code, Editor, EditorTabsContainer, EditorPagesContainer, EditorPage, EditorTab, Doc } from './styles'

const SandboxContext = createContext()

export default function Sandbox({ children, ...restProps }) {
  const [ pages, setPages ] = useState([])
  const [ activePage, setActivePage ] = useState('')
  const [ html, setHtml ] = useState('')
  const [ css, setCss ] = useState('')
  const [ js, setJs ] = useState('')

  return (
    <SandboxContext.Provider value={{ pages, setPages, activePage, setActivePage, html, setHtml, css, setCss, js, setJs }}>
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
  const { activePage, setHtml, setCss, setJs } = useContext(SandboxContext)

  useEffect(() => {
    Prism.highlightAll()
    id === 'html' && setHtml(children)
    id === 'css' && setCss(children)
    id === 'js' && setJs(children)
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

Sandbox.Document = function SandboxDocument({ title, ...restProps }) {
  const { html, css, js } = useContext(SandboxContext)
  const docRef = useRef()
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    if (html) {
      docRef.current.contentWindow.document.body.innerHTML = html
      if (css) {
        const style = document.createElement('style')
        style.textContent = css
        docRef.current.contentWindow.document.head.appendChild(style)
      }
      if (js) {
        const script = document.createElement('script')
        script.textContent = js
        docRef.current.contentWindow.document.head.appendChild(script)
      }
    }
    
    if (html || js || css) {
      setIsLoading(false)
    }
  }, [html, js, css])

  return html ? <Doc ref={docRef} hidden={isLoading} title={title} {...restProps}></Doc> : null
}




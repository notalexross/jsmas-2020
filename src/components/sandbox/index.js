import { useState } from 'react'
import { Container, Code } from './styles'

export default function Sandbox({ src, ...restProps }) {
  const [ html, setHtml ] = useState('')
  const [ css, setCss ] = useState('')
  const [ js, setJs ] = useState('')

  import(`../../${src}`).then(data => {
    setJs(data.js)
    setHtml(data.html)
    setCss(data.css)
  }).catch(err => console.error(err))

  return (
    <Container {...restProps}>
      {html && <Code>{html}</Code>}
      {css && <Code>{css}</Code>}
      {js && <Code>{js}</Code>}
    </Container>
  )
}



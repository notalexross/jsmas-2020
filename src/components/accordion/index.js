import { createContext, useState, useContext } from 'react'
import { Container, Item, Head, Icon, Title, Body } from './styles'

const Context = createContext()

export default function Accordion({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Accordion.Item = function AccordionItem({ children, ...restProps}) {
  const [ isOpen, setIsOpen ] = useState(false)

  return (
    <Context.Provider value={{ isOpen, setIsOpen }}>
      <Item {...restProps}>{children}</Item>
    </Context.Provider>
  )
}

Accordion.OpenCloseIcon = function AccordionOpenCloseIcon({ children, ...restProps }) {
  const { isOpen } = useContext(Context)

  return isOpen ? <Icon {...restProps}>&minus;</Icon> : <Icon {...restProps}>+</Icon>
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Accordion.Head = function AccordionHead({ children, ...restProps}) {
  const { setIsOpen } = useContext(Context)

  return (
    <Head onClick={() => setIsOpen(isOpen => !isOpen)} {...restProps}>
      {children}
    </Head>
  )
}

Accordion.Body = function AccordionBody({ children, ...restProps}) {
  const { isOpen } = useContext(Context)

  return isOpen ? <Body {...restProps}>{children}</Body> : null
}
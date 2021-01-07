import { createContext, useState, useContext, useEffect } from 'react'
import { Container, Item, Head, Icon, Title, Body } from './styles'

const Context = createContext()

export default function Accordion({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Accordion.Item = function AccordionItem({ respectSetLoaded = false, children, ...restProps}) {
  const [ isOpen, setIsOpen ] = useState(false)
  const [ isLoading, setIsLoading ] = useState(respectSetLoaded)

  return (
    <Context.Provider value={{ isOpen, setIsOpen, isLoading, setIsLoading, respectSetLoaded }}>
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
  const { isOpen, isLoading } = useContext(Context)

  return isOpen ? <Body hidden={isLoading} {...restProps}>{children}</Body> : null
}

Accordion.SetLoaded = function AccordionSetLoaded() {
  const { setIsLoading, respectSetLoaded } = useContext(Context)

  useEffect(() => {
    if (respectSetLoaded) {
      setIsLoading(false)
      return () => setIsLoading(true)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
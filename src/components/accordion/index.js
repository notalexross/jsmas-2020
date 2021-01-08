import { createContext, useState, useContext, useEffect, useRef } from 'react'
import { Container, Item, Head, Icon, Title, Body } from './styles'

const AccordionContext = createContext()
const ItemContext = createContext()

export default function Accordion({ autoCollapse = false, children, ...restProps }) {
  // TODO: only a single accordion item should be open at a time
  const [ activeItem, setActiveItem ] = useState()

  return (
    <AccordionContext.Provider value={{ autoCollapse, activeItem, setActiveItem }}>
      <Container {...restProps}>{children}</Container>
    </AccordionContext.Provider>
  )
}

Accordion.Item = function AccordionItem({ itemId, respectSetLoaded = false, children, ...restProps}) {
  const [ isOpen, setIsOpen ] = useState(false)
  const [ isLoading, setIsLoading ] = useState(respectSetLoaded)

  return (
    <ItemContext.Provider value={{ isOpen, setIsOpen, isLoading, setIsLoading, respectSetLoaded, itemId }}>
      <Item {...restProps}>{children}</Item>
    </ItemContext.Provider>
  )
}

Accordion.OpenCloseIcon = function AccordionOpenCloseIcon({ children, ...restProps }) {
  const { isOpen } = useContext(ItemContext)

  return isOpen ? <Icon {...restProps}>&minus;</Icon> : <Icon {...restProps}>+</Icon>
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Accordion.Head = function AccordionHead({ children, ...restProps}) {
  const { isOpen, setIsOpen, itemId } = useContext(ItemContext)
  const { autoCollapse, activeItem, setActiveItem } = useContext(AccordionContext)

  const handleClick = () => {
    if (autoCollapse) {
      if (itemId !== undefined) {
        setActiveItem(!isOpen && itemId !== undefined && itemId)
      } else {
        console.error('Each accordion item requires a (unique) itemId in order to use the autoCollapse attribute')
      }
    } else {
      setIsOpen(isOpen => !isOpen)
    }  
  }

  useEffect(() => {
    if (autoCollapse && itemId !== undefined) {
      setIsOpen(itemId === activeItem)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeItem])

  return (
    <Head onClick={handleClick} {...restProps}>
      {children}
    </Head>
  )
}

Accordion.Body = function AccordionBody({ children, ...restProps}) {
  const { isOpen, isLoading, itemId } = useContext(ItemContext)
  const { autoCollapse, activeItem } = useContext(AccordionContext)
  const bodyRef = useRef()

  useEffect(() => {
    if (autoCollapse && isOpen && activeItem !== undefined && itemId < activeItem) {
      window.scrollBy(0, -bodyRef.current.offsetHeight)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeItem])

  return isOpen ? <Body ref={bodyRef} hidden={isLoading} {...restProps}>{children}</Body> : null
}

Accordion.SetLoaded = function AccordionSetLoaded() {
  const { setIsLoading, respectSetLoaded } = useContext(ItemContext)

  useEffect(() => {
    if (respectSetLoaded) {
      setIsLoading(false)
      return () => setIsLoading(true)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
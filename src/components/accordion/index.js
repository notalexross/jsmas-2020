import { createContext, useState, useContext, useEffect, useRef } from 'react'
import { Container, Item, Head, Icon, Title, Body } from './styles'

const AccordionContext = createContext()
const ItemContext = createContext()

export default function Accordion({ children, shouldAutoCollapse = false, ...restProps }) {
  const [activeItem, setActiveItem] = useState(null)

  return (
    <AccordionContext.Provider value={{ shouldAutoCollapse, activeItem, setActiveItem }}>
      <Container {...restProps}>{children}</Container>
    </AccordionContext.Provider>
  )
}

Accordion.Item = function AccordionItem({
  children,
  itemId,
  shouldRespectSetLoaded = false,
  ...restProps
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(shouldRespectSetLoaded)

  return (
    <ItemContext.Provider
      value={{ isOpen, setIsOpen, isLoading, setIsLoading, shouldRespectSetLoaded, itemId }}
    >
      <Item {...restProps}>{children}</Item>
    </ItemContext.Provider>
  )
}

Accordion.OpenCloseIcon = function AccordionOpenCloseIcon({ ...restProps }) {
  const { isOpen } = useContext(ItemContext)

  return isOpen ? <Icon {...restProps}>&minus;</Icon> : <Icon {...restProps}>+</Icon>
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Accordion.Head = function AccordionHead({ children, ...restProps }) {
  const { isOpen, setIsOpen, itemId } = useContext(ItemContext)
  const { shouldAutoCollapse, activeItem, setActiveItem } = useContext(AccordionContext)

  const handleClick = () => {
    if (shouldAutoCollapse) {
      if (itemId !== undefined) {
        setActiveItem(!isOpen ? itemId : null)
      } else {
        console.error(
          'Each accordion item requires a (unique) itemId in order to use the shouldAutoCollapse attribute'
        )
      }
    } else {
      setIsOpen(state => !state)
    }
  }

  useEffect(() => {
    if (shouldAutoCollapse) {
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

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { isOpen, isLoading, itemId } = useContext(ItemContext)
  const { shouldAutoCollapse, activeItem } = useContext(AccordionContext)
  const bodyRef = useRef()

  useEffect(() => {
    const shouldScroll = () => (
      shouldAutoCollapse && isOpen && Number.isInteger(activeItem) && itemId < activeItem
    )

    if (shouldScroll()) {
      window.scrollBy(0, -bodyRef.current.offsetHeight)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeItem])

  return isOpen ? (
    <Body ref={bodyRef} hidden={isLoading} {...restProps}>
      {children}
    </Body>
  ) : null
}

Accordion.SetLoaded = function AccordionSetLoaded() {
  const { setIsLoading, shouldRespectSetLoaded } = useContext(ItemContext)

  useEffect(() => {
    if (shouldRespectSetLoaded) {
      setIsLoading(false)

      return () => setIsLoading(true)
    }

    return null
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}

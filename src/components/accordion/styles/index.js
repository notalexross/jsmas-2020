import styled from 'styled-components'

export const Container = styled.div`
  border-bottom: none;
  overflow: hidden;
`

export const Item = styled.div``

export const Head = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: #1e1e1e;
  color: #e5e5e5;
  font-size: 1.55em;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #333;
  }

  @media (min-width: 700px) {
    padding: 0.8em;
  }
`

export const Title = styled.h1`
  margin: 0 1em;
  font-size: 1em;
  font-weight: inherit;
`

export const Icon = styled.span``

export const Body = styled.div`
  box-shadow: inset var(--bs);
  padding: 1.5rem;
  border-bottom: solid 1px #444;
  background-color: #e5e5e5;
  color: #1e1e1e;
  font-size: 1.3em;
`

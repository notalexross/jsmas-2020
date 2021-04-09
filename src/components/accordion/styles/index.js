import styled from 'styled-components'

export const Container = styled.div`
  // border: solid 1px #444;
  border-bottom: none;
  overflow: hidden;
`

export const Item = styled.div``

export const Head = styled.section`
  padding: 0.5em 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-size: 1.55em;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
  background-color: #1e1e1e;
  color: #e5e5e5;
  padding: 1em;
  // border-bottom: solid 1px #444;

  &:hover {
    background-color: #333;
  }

  @media (min-width: 700px) {
    padding: 0.8em;
  }
`

export const Title = styled.h1`
  font-size: 1em;
  font-weight: inherit;
  margin: 0 1em;
`

export const Icon = styled.span``

export const Body = styled.div`
  background-color: #e5e5e5;
  color: #1e1e1e;
  font-size: 1.3em;
  box-shadow: inset var(--bs);
  padding: 1.5rem;
  border-bottom: solid 1px #444;
`

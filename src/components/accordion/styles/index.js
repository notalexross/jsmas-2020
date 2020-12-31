import styled from 'styled-components'

export const Container = styled.div`
  border: solid 1px #444;
  border-bottom: none;
`

export const Item = styled.div`

`

export const Head = styled.section`
  padding: 0.5em 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-size: 1.5em;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
  background-color: #1e1e1e;
  color: #e5e5e5;
  border-bottom: solid 1px #444;

  &:hover {
    background-color: #333;
  }
`

export const Title = styled.h1`
  font-size: inherit;
  font-weight: inherit;
  margin: 0 1em;
`

export const Icon = styled.span`
  
`

export const Body = styled.div`
  background: #3c3c3c;
  padding: 1.5em;
  border-bottom: solid 1px #444;
`
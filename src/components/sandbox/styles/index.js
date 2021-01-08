import styled from 'styled-components'

export const Container = styled.div`
  color: #e5e5e5;

  @media (min-width: 1550px) {
    display: grid;
    grid-template-columns: 49% 49%;
    justify-content: space-between;
  }
`

export const Pre = styled.pre`
  // margin: 0;
  // padding: 0;
  // white-space: pre-wrap;
`

export const Code = styled.code`

`

export const Editor = styled.div`

`

export const EditorTabsContainer = styled.div`
  display: flex;
  background-color: #252525;
`

export const EditorTab = styled.div`
  background-color: ${({ isActive }) => isActive ? '#1e1e1e' : '#2d2d2d'};
  cursor: pointer;
  font-size: 1em;
  padding: 0.3em 1em;
  max-width: 20%;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  border-left: solid 1px #1e1e1e;
  line-height: 1.3;

  &:first-of-type {
    border-left: none;
  }
`

export const EditorPagesContainer = styled.div`

`

export const EditorPage = styled.div`
  overflow: auto;
  box-sizing: border-box;
  height: calc(410px - 0.6em - 1.2em);
  background-color: #1e1e1e;
  font-size: 0.7em;
`

export const Doc = styled.iframe`
  width: 100%;
  height: 410px;
  background-color: #1e1e1e;
  box-sizing: border-box;
  margin-top: 1.5rem;
  border: none;

  @media (min-width: 1550px) {
    margin-top: 0;
  }


`
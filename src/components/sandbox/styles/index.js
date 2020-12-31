import styled from 'styled-components'

export const Container = styled.div`

`

export const Pre = styled.pre`
  margin: 0;
  padding: 0;
  white-space: pre-wrap;
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
  padding: 0.3em 1em;
  max-width: 20%;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  border-left: solid 1px #1e1e1e;

  &:first-of-type {
    border-left: none;
  }
`

export const EditorPagesContainer = styled.div`

`

export const EditorPage = styled.div`
  // border: solid 1px #e5e5e5;
  // padding: 1em;
  overflow: auto;
  box-sizing: border-box;
  height: 400px;
  background-color: #1e1e1e;
`

export const Doc = styled.iframe`
  width: 100%;
  height: 400px;
  background-color: #fff;
  box-sizing: border-box;
  margin-top: 1em;
  border: solid 1px;
`
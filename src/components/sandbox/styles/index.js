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
  background-color: #1e1e1e;
  box-sizing: border-box;
  height: 410px;

  display: flex;
  flex-direction: column;
`

export const EditorTabsContainer = styled.div`
  display: flex;
  background-color: #252525;
`

export const EditorTab = styled.div`
  background-color: ${({ isActive }) => isActive ? '#1e1e1e' : '#2d2d2d'};
  cursor: pointer;
  font-size: 0.85em;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 0.4em 1em;
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
  overflow: auto;
`

export const EditorPage = styled.div`
  font-size: 0.65em;
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
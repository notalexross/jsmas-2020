import styled from 'styled-components'

export const Container = styled.div`
  color: #e5e5e5;

  @media (min-width: 1550px) {
    display: grid;
    grid-template-columns: 49% 49%;
    justify-content: space-between;
  }
`

export const Pre = styled.pre``

export const Code = styled.code``

export const Editor = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 410px;
  box-sizing: border-box;
  border-radius: 0.2rem;
  background-color: #1e1e1e;
  box-shadow: var(--bs);
`

export const EditorTabsContainer = styled.div`
  display: flex;
  background-color: #252525;
`

export const EditorTab = styled.div`
  overflow: hidden;
  padding: 0.4em 1em;
  max-width: 20%;
  border-left: solid 1px #1e1e1e;
  background-color: ${({ isActive }) => (isActive ? '#1e1e1e' : '#2d2d2d')};
  font-size: 0.85em;
  font-weight: 700;
  letter-spacing: 0.05em;
  line-height: 1.3;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;

  &:first-of-type {
    border-left: none;
  }
`

export const EditorPagesContainer = styled.div`
  flex-grow: 1;
  overflow: auto;
`

export const EditorPage = styled.div`
  font-size: 0.65em;
`

export const Doc = styled.iframe`
  width: 100%;
  height: 410px;
  margin-top: 1.5rem;
  border: none;
  border-radius: 0.2rem;
  box-sizing: border-box;
  background-color: #1e1e1e;
  box-shadow: var(--bs);

  @media (min-width: 1550px) {
    margin-top: 0;
  }
`

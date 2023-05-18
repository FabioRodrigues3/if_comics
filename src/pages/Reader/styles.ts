import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const ChapterControl = styled.div`
  display: flex;
  gap: 1rem;

  button {
    background-color: teal;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 0.5rem;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`

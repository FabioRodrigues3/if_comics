import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const Controllers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 15px 0;

  div {
    display: flex;
    gap: 1rem;
  }

  button {
    background-color: teal;
    border: none;
    color: white;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
    }
  }
`
export const ReloadScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  justify-content: center;
  width: 100%;
  height: 100%;

  h2 {
    text-align: center;
  }
`

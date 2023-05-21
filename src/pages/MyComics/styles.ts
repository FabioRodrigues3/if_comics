import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 110px;
  max-width: 800px;
  display: flex;
  object-fit: cover;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 12px;

  > div {
    display: flex;
    flex-direction: column;
  }
`

export const Series = styled.div`
  display: flex;
  margin-top: 50px;
  flex-wrap: wrap;
`

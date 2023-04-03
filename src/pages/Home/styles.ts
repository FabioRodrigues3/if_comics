import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem;
  width: 100%;
  gap: 1rem;

  h2 {
    font-weight: 400;
    padding: 1rem 0;
  }
`

export const DefaultWorkStyle = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
`

export const Works = styled(DefaultWorkStyle)`
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`

export const FindWorks = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

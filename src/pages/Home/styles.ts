import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem 0 3rem 2rem;
  width: 90%;
  gap: 1rem;
  background-color: white;

  h2 {
    font-weight: 400;
    padding: 1rem 0;
  }
`

export const DefaultWorkStyle = styled.div`
  display: flex;
  gap: 1rem;
`

export const Works = styled(DefaultWorkStyle)`
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0;
`

export const FindWorks = styled.div`
  display: flex;
  padding: 2rem 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

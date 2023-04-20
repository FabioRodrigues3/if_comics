import styled from 'styled-components'

export const TagContainer = styled.div`
  display: flex;
  background: none;
  background-color: none;
  flex-wrap: wrap;
  padding: 1rem 1rem 1rem 1rem;
  gap: 1rem;
`

export const Tag = styled.span`
  border: 1px solid #707070;
  display: flex;
  max-width: 250px;
  align-items: center;
  padding: 0.2rem 0.2rem;
  flex-wrap: wrap;
  border-radius: 10px;
`

export const Container = styled.div`
  padding: 0 0;
  display: flex;
  flex-direction: column;
  border: 1px solid #8a8a8a;
  border-radius: 10px;
  color: #707070;

  p {
    max-width: 250px;
    line-break: auto;
    text-align: start;
    padding: 1rem;
    color: #707070;
  }
`
export const CardTitle = styled.div`
  padding: 1rem 1rem 1rem 1rem;
  background: #efefef;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  color: #707070;
  border-bottom: 1px solid #707070;
  flex-wrap: wrap;
`

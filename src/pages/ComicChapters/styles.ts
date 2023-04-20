import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  padding: 2rem 0;
  margin: 0 auto;
`

export const InfoCardArea = styled.div`
  display: flex;
  gap: 1.9375rem;
  flex-direction: column;
`

export const WorkDetailedInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

export const WorkImage = styled.img`
  height: 300px;
  width: 220px;
  border-radius: 30px;
  background-position: center;
`

export const WorkHeader = styled.header`
  display: flex;
  gap: 2rem;
`
export const WorkTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 1rem;
  color: #707070;

  h3 {
    font-size: 2.1875rem;
    font-weight: lighter;
    color: #707070;
  }

  span {
    font-size: 1.6rem;
  }
`
export const WorkChapters = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 2.8125rem;
    border-bottom: 1px solid #707070;
    font-weight: 500;
    color: #707070;
    padding: 1rem 0;
  }
`
export const Chapters = styled.div`
  padding: 1rem 0;
`

export const Chapter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid #707070;
  padding-bottom: 1rem;

  h4 {
    font-size: 2.1875rem;
    font-weight: 500;
    color: #707070;
  }

  sub {
    font-size: 0.9375rem;
    color: #707070;
  }
`

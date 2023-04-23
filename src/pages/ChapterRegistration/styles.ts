import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  h2 {
    font-weight: 500;
    width: 100%;
    color: #707070;
  }
`

export const Title = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  background-color: #efefef;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const MainDescription = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  min-width: 750px;
`

export const ImageUpload = styled.div`
  background-color: #efefef;
  border: gray dotted 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  gap: 0.5rem;
  min-width: 350px;
  color: #707070;
  border-radius: 30px;

  span {
    font-weight: 500;
    font-size: 20px;
    color: #cdcdcd;
  }

  input[type='file'] {
    display: none;
  }

  label {
    border: 1px solid black;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
    background-color: #707070;
    border-radius: 15px;
    text-align: center;
    max-width: 120px;
    padding: 9px 70px;
    color: white;
    font-size: 30px;
    font-weight: 400;
    transition: 1s ease;
    border: none;

    &:hover {
      background-color: #5b5757;
    }
  }
`

export const TitleAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 20px;
  gap: 50px;
  min-width: 650px;
  width: 100%;
  font-weight: 400;
`

export const WorkTitle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;

  input {
    width: 100%;
    padding: 0.9rem;
    border-radius: 20px;
    border: 1px solid #707070;
  }
`

export const RemoveFile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    color: gray;
    &:hover {
      color: black;
      transition: ease-in 0.5s;
      cursor: pointer;
    }
  }
`

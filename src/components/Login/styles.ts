import styled from 'styled-components'
import BG from '../../assets/bg.webp'
export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;

  background: url(${BG}) center no-repeat;
  background-size: 1500px;
`

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LoginBox = styled.form`
  background-color: white;
  display: flex;
  border-radius: 5px;
  height: 150px;
  width: 335px;
  box-shadow: 0px 0px 3px black;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  gap: 2rem;

  div {
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
      padding: 30px;
    }
  }
`
export const Buttons = styled.div`
  gap: 1rem;

  button {
    padding: 0.5rem;
    border: none;
    box-shadow: 0px 0px 2px;
    border-radius: 6px;
    background-color: #008080;
    color: white;
    font-weight: 600;
    width: 100%;
    align-self: center;

    &:hover {
      background-color: #007373;
    }
  }

  button:nth-child(1) {
    background-color: #008080;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    padding: 0.8rem;

    &:hover {
      background-color: #007373;
    }
  }
`

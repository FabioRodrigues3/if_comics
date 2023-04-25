import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Button = styled.button`
  background-color: #707070;
  border-radius: 15px;
  width: 100%;
  text-align: center;
  max-width: 200px;
  padding: 5px 10px;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  transition: 1s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #5b5757;
  }
`

export const NavigatableButton = styled(Link)`
  background-color: #707070;
  border-radius: 30px;
  width: 100%;
  text-align: center;
  max-width: 250px;
  padding: 5px 10px;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  transition: 1s ease;

  &:hover {
    background-color: #5b5757;
  }
`

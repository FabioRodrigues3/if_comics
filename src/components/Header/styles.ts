import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as Avatar from '@radix-ui/react-avatar'
import * as Dropdown from '@radix-ui/react-dropdown-menu'

export const Container = styled.header`
  width: 100%;
  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px 50px;
    background-color: white;
    box-shadow: 0px 0px 3px black;
    margin-bottom: 1px;

    @media (max-width: ${(props) => props.theme.l}) {
      > a {
        display: none;
      }
    }

    > div {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    @media (max-width: ${(props) => props.theme.l}) {
      flex-direction: column;
      gap: 1rem;
      padding: 1rem 0;
    }
  }
`

export const StyledLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  font-size: 1rem;
  gap: 0.5rem;
  margin: 0;

  &:hover {
    color: gray;
    transition: 0.2s ease-in;

    span {
      &:hover {
        transition: 0.2 ease-in;
        animation-name: fromRight;
        animation-duration: 4s;
      }
    }
  }
`

export const Title = styled(StyledLink)`
  @media (max-width: ${(props) => props.theme.l}) {
    display: block;
  }
`

export const AvatarPic = styled(Avatar.Root)`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const AvatarImage = styled(Avatar.Image)`
  height: 30px;
  width: 30px;
  border-radius: 100%;
  object-fit: cover;
`

export const Content = styled(Dropdown.Content)`
  min-width: 200px;
  z-index: 99999999;
  background-color: white;
  border-radius: 6px;
  padding: 8px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
`

export const Item = styled(Dropdown.Item)`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 1rem;
  cursor: pointer;

  div {
    display: flex;
    flex-direction: column;
    font-size: 12px;
  }
`

export const Separator = styled(Dropdown.Separator)`
  height: 1px;
  width: 100%;
  background-color: #707070;
  margin: 5px;
`

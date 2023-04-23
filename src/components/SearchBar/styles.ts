import { Item, Content } from '@radix-ui/react-dropdown-menu'
import styled from 'styled-components'

export const Search = styled.input`
  padding: 8px;
  border-radius: 30px;
  padding-left: 15px;
  outline: none;
  font-size: 15px;
`

export const SearchItem = styled(Item)`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    aspect-ratio: 1/1;
    height: 50px;
    width: 50px;
    object-fit: cover;
    object-position: 50% 50%;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`

export const Famous = styled(Item)``

export const SearchResults = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`

export const DropdownContent = styled(Content)`
  min-width: 300px;
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

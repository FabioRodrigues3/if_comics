import { Content } from '@radix-ui/react-dialog'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Search = styled.input`
  padding: 8px;
  border-radius: 30px;
  padding-left: 15px;
  outline: none;
  font-size: 15px;
`

export const SearchItem = styled.div`
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

export const Famous = styled.div``

export const SearchResults = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  background-color: white;
  box-shadow: 1px 1px 3px;
  position: absolute;
  top: 30px;
  right: 6%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 2rem;
  z-index: 500;
  max-width: 500px;
  width: 300px;

  img {
    aspect-ratio: 1/1;
    height: 50px;
    width: 50px;
    object-fit: cover;
    object-position: 50% 50%;
  }

  svg {
    position: absolute;
    top: 15px;
    right: 15px;
  }
`

export const WrapperSearch = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
`

export const WrapperInfo = styled(Link)`
  flex-direction: column;
  width: 100%;
  display: flex;
`

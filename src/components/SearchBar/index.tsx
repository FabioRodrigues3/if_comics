import { GetComics } from '../../services/getComics'
import {
  DialogContent,
  DropdownContent,
  Famous,
  Search,
  SearchItem,
  SearchResults,
  WrapperInfo,
  WrapperSearch,
} from './styles'
import React, { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dropdown-menu'
import { Link } from 'react-router-dom'
import { X } from 'phosphor-react'

export function SearchBar() {
  const [inputText, setInputText] = useState('')
  const [data, setData] = useState<[]>([])
  const [content, setContent] = useState([])
  const getSearchData = async () => {
    await GetComics().then((response) => setData(response))
  }

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterResult = data.filter(
      (item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.author.toLowerCase().includes(e.target.value.toLowerCase()),
    )
    setInputText(e.target.value)
    setContent(filterResult)

    console.log(content)
  }

  useEffect(() => {
    getSearchData()
  }, [])
  return (
    <>
      <Dialog.Root open={true}>
        <Search type="search" onChange={inputHandler} placeholder="Pesquisar" />
        {inputText.length >= 3 && (
          <SearchResults>
            <X onClick={() => setInputText('')} />
            {!content.length && <span>Resultado não encontrado.</span>}
            {content.map((item) => (
              <WrapperSearch>
                <img src={item.imageUrl} />
                <WrapperInfo to={`/comic/${item.id}`}>
                  <span>{item.title}</span>
                  <span>{item.author}</span>
                </WrapperInfo>
              </WrapperSearch>
            ))}
          </SearchResults>
        )}
      </Dialog.Root>
    </>
  )
}

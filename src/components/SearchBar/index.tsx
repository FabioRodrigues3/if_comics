import { GetComics } from '../../services/getComics'
import {
  DropdownContent,
  Famous,
  Search,
  SearchItem,
  SearchResults,
} from './styles'
import React, { useState, useEffect } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Link } from 'react-router-dom'

export function SearchBar() {
  const [inputText, setInputText] = useState('')
  const [data, setData] = useState<[]>([])

  const getSearchData = async () => {
    await GetComics().then((response) => setData(response))
  }

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lowerCased = e.target.value.toLowerCase()
    setInputText(lowerCased)
    console.log(inputText)
  }
  useEffect(() => {
    getSearchData()
  }, [])
  return (
    <>
      <DropdownMenu.Root defaultOpen={false} modal={false}>
        <DropdownMenu.Trigger asChild>
          <Search
            type="search"
            onChange={inputHandler}
            placeholder="Pesquisar"
          />
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownContent sideOffset={0}>
            <Famous>
              <h3>Mais procurados</h3>
            </Famous>
            <SearchResults>
              {data?.map((item) => (
                <Link to={`comic/${item.id}`}>
                  <SearchItem>
                    <img src={item.image}></img>
                    <div>
                      <span>{item.title}</span>
                      <tspan>{item.author}</tspan>
                    </div>
                  </SearchItem>
                </Link>
              ))}
            </SearchResults>
          </DropdownContent>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  )
}

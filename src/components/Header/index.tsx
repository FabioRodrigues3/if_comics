import { Button } from '../Button'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
  AvatarImage,
  AvatarPic,
  Container,
  Content,
  Item,
  StyledLink,
  Title,
} from './styles'
import {
  BookOpen,
  Files,
  Gear,
  Question,
  SignOut as Out,
  User,
} from 'phosphor-react'
import { Separator } from '@radix-ui/react-separator'
import { SearchBar } from '../SearchBar'
import { useAuth } from '../../hooks/useAuth'
import React, { useEffect } from 'react'

export function Header() {
  const { SignOut, googleUser, setGoogleUser } = useAuth()

  // useEffect(() => {
  //   const data = localStorage.getItem('u')
  //   setGoogleUser(data)
  // }, [])

  return (
    <>
      <Container>
        <nav>
          <Title to="/">ifComics</Title>
          <div>
            <SearchBar />
            {!googleUser?.email && (
              <StyledLink to="/login">
                <User size={23} weight="fill" />
                Login
              </StyledLink>
            )}

            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <AvatarPic>
                  <AvatarImage src={googleUser?.photoURL} />
                </AvatarPic>
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <Content sideOffset={8}>
                  <Item>
                    <AvatarPic>
                      <AvatarImage src={googleUser?.photoURL} />
                    </AvatarPic>
                    <div>
                      <span>{googleUser?.displayName}</span>
                      <span>{`@${googleUser?.displayName}`}</span>
                    </div>
                  </Item>
                  <Separator />

                  <StyledLink to="/">
                    <Item>
                      <BookOpen size={28} weight="fill" />
                      <span>Biblioteca</span>
                    </Item>
                  </StyledLink>

                  <StyledLink to="/">
                    <Item>
                      <Files size={28} />
                      <span>Minhas histórias</span>
                    </Item>
                  </StyledLink>

                  <Separator />

                  <Item>
                    <Gear size={28} />
                    <span>Configurações</span>
                  </Item>

                  <Item>
                    <Out size={28} weight="fill" onClick={SignOut} />
                    <span>Sair</span>
                  </Item>
                </Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
            {googleUser?.email && (
              <Button title="Publicar" isNavigatable path="/admin/new-series" />
            )}
          </div>
        </nav>
      </Container>
    </>
  )
}

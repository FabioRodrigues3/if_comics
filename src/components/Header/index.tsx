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
import { BookOpen, Files, Gear, Question, SignOut, User } from 'phosphor-react'
import { Separator } from '@radix-ui/react-separator'
import { SearchBar } from '../SearchBar'
import { useAuth } from '../../hooks/useAuth'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth'
import { auth } from '../../utils/firebase.js'
import { setLocalUser } from '../../contexts/authUtil'

export function Header() {
  const [user] = useAuthState(auth)
  const {} = useAuth()

  async function useHook() {
    const [user, loading, error] = useSignOut(auth)
    setLocalUser(null)
  }

  return (
    <>
      <Container>
        <nav>
          <Title to="/">ifComics</Title>
          <div>
            <SearchBar />
            {!user && (
              <StyledLink to="/login">
                <User size={23} weight="fill" />
                Login
              </StyledLink>
            )}

            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <AvatarPic>
                  <AvatarImage src={user?.photoURL} />
                </AvatarPic>
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <Content sideOffset={8}>
                  <Item>
                    <AvatarPic>
                      <AvatarImage src={user?.photoURL} />
                    </AvatarPic>
                    <div>
                      <span>{user?.displayName}</span>
                      <span>{`@${user?.displayName}`}</span>
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

                  <Item onClick={useHook}>
                    <SignOut size={28} weight="fill" />
                    <span>Sair</span>
                  </Item>
                </Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>

            <Button title="Publicar" isNavigatable path="/admin/new-series" />
          </div>
        </nav>
      </Container>
    </>
  )
}

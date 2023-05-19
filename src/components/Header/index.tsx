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
import { BookOpen, Files, Gear, SignOut as Out, User } from 'phosphor-react'
import { Separator } from '@radix-ui/react-separator'
import { SearchBar } from '../SearchBar'
import { useAuth } from '../../hooks/useAuth'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../utils/firebase.js'

export function Header() {
  const { googleUser, setGoogleUser } = useAuth()
  const navigate = useNavigate()

  async function Logout() {
    await signOut(auth).then(() => {
      navigate('/login')
      setGoogleUser()
    })
  }

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
                      <AvatarImage
                        src={
                          googleUser?.photoURL
                            ? googleUser?.photoURL
                            : 'https://i.pinimg.com/222x/57/70/f0/5770f01a32c3c53e90ecda61483ccb08.jpg'
                        }
                      />
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
                    <Out size={28} weight="fill" onClick={Logout} />
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

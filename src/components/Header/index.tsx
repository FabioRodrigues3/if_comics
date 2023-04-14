import { Button } from '../Button'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
  AvatarImage,
  AvatarPic,
  Container,
  Content,
  Item,
  StyledLink,
} from './styles'
import { BookOpen, Files, Gear, Question, User } from 'phosphor-react'
import { Separator } from '@radix-ui/react-separator'

export function Header() {
  return (
    <>
      <Container>
        <nav>
          <StyledLink to="/">ifComics</StyledLink>
          <div>
            <input type="search" placeholder="Pesquisar" />
            <StyledLink to="/login">
              <User size={23} weight="fill" />
              Login
            </StyledLink>

            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <AvatarPic>
                  <AvatarImage src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80" />
                </AvatarPic>
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <Content sideOffset={8}>
                  <Item className="DropdownMenuItem">
                    <AvatarPic>
                      <AvatarImage src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80" />
                    </AvatarPic>
                    <div>
                      <span>coelho5</span>
                      <span>@coelho5</span>
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

                  <Item disabled>
                    <Gear size={28} />
                    <span>Configurações</span>
                  </Item>

                  <Item>
                    <Question size={28} weight="fill" />
                    <span>Ajuda</span>
                  </Item>
                </Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>

            <Button
              title="Publicar"
              isNavigatable
              path="/create-work/new-series"
            />
          </div>
        </nav>
      </Container>
    </>
  )
}

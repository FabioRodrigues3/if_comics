import { GithubLogo, InstagramLogo, TwitterLogo } from 'phosphor-react'
import { Container, FooterContent, FooterText, Year } from './styles'

export function Footer() {
  return (
    <>
      <Container>
        <FooterContent>
          <span>ifComics</span>
          <div>
            <InstagramLogo size={40} />
            <GithubLogo size={40} />
            <TwitterLogo size={40} weight="fill" />
          </div>

          <FooterText>
            <span>Ajuda</span>
            <span>Contato</span>
            <span>Publicar</span>
          </FooterText>

          <Year>2023 &copy;</Year>
        </FooterContent>
      </Container>
    </>
  )
}

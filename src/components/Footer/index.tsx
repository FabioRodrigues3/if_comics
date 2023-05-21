import { GithubLogo, InstagramLogo, TwitterLogo } from 'phosphor-react'
import { Container, FooterContent, FooterText, Year } from './styles'

export function Footer() {
  return (
    <>
      <Container>
        <FooterContent>
          <span>[ifComics]</span>
          <a
            href="https://github.com/FabioRodrigues3"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo size={40} />
          </a>

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

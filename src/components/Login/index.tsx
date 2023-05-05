import { useNavigate } from 'react-router-dom'
import { Buttons, Container, LoginBox, Logo } from './styles'
import { GoogleLogo } from 'phosphor-react'
import { useAuth } from '../../hooks/useAuth'
import { useEffect } from 'react'

export function Login() {
  const { LoginWithGoogle, googleUser } = useAuth()
  const navi = useNavigate()
  useEffect(() => {
    localStorage.setItem('u', JSON.stringify(googleUser))
    if (googleUser.email) {
      navi('/')
    }
  }, [googleUser, navi])

  return (
    <Container>
      <Logo>
        <h2>[ifComics]</h2>
        <p>Upload your story now</p>
      </Logo>
      <LoginBox>
        <Buttons>
          <button type="button" onClick={LoginWithGoogle}>
            <GoogleLogo size={20} /> Entrar com o Google
          </button>
        </Buttons>
      </LoginBox>
    </Container>
  )
}

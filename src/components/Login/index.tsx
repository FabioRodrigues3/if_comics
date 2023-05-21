import { Buttons, Container, LoginBox, Logo } from './styles'
import { GoogleLogo } from 'phosphor-react'
import { useAuth } from '../../hooks/useAuth'
import { useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  browserLocalPersistence,
  browserSessionPersistence,
  setPersistence,
} from 'firebase/auth'
import { auth } from '../../utils/firebase'
import { LoadingElement } from '../LoadingElement'
import { Modal } from '../Modal'

export function Login() {
  const { LoginWithGoogle, googleUser, setGoogleUser } = useAuth()
  const navi = useNavigate()

  async function LoginWithGoogleAuth() {
    try {
      setPersistence(auth, browserSessionPersistence).then(() => {
        LoginWithGoogle()
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (googleUser?.email || googleUser?.emailVerified) {
      navi('/')
    }
  }, [googleUser?.email, googleUser?.emailVerified, navi])

  return (
    <Container className="slide-in-right">
      {googleUser?.emailVerified ? (
        <>
          <LoadingElement isFullScreen={false} />
          <h2>Redirecionando...</h2>
        </>
      ) : (
        <>
          <Logo>
            <h2>[ifComics]</h2>
            <p>Upload your story now</p>
          </Logo>
          <LoginBox>
            <Buttons>
              <button type="button" onClick={LoginWithGoogleAuth}>
                <GoogleLogo size={20} /> Entrar com o Google
              </button>
            </Buttons>
          </LoginBox>
        </>
      )}
    </Container>
  )
}

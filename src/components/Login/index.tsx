import { Buttons, Container, LoginBox, Logo } from './styles'
import { GoogleLogo } from 'phosphor-react'
import { useAuth } from '../../hooks/useAuth'
import { useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { browserLocalPersistence, setPersistence } from 'firebase/auth'
import { auth } from '../../utils/firebase'
import { LoadingElement } from '../LoadingElement'
import { Modal } from '../Modal'

export function Login() {
  const { LoginWithGoogle, googleUser, setGoogleUser } = useAuth()
  const navi = useNavigate()

  async function LoginWithGoogleAuth() {
    try {
      LoginWithGoogle()
      setPersistence(auth, browserLocalPersistence)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (googleUser?.email || googleUser?.emailVerified) {
      navi('/')
    }
  }, [googleUser?.email, googleUser?.emailVerified, navi])

  useEffect(() => {
    const data = localStorage.getItem('u')
    if (data !== null) setGoogleUser(JSON.parse(data))
  }, [])

  useEffect(() => {
    localStorage.setItem('u', JSON.stringify(googleUser))
  }, [googleUser])

  return (
    <Container className="slide-in-right">
      {googleUser?.emailVerified ? (
        <>
          <LoadingElement />
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

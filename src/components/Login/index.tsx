import { Buttons, Container, LoginBox, Logo } from './styles'
import { GoogleLogo } from 'phosphor-react'
import { useAuth } from '../../hooks/useAuth'
import { useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  browserLocalPersistence,
  onAuthStateChanged,
  setPersistence,
} from 'firebase/auth'
import { auth } from '../../utils/firebase'
import { LoadingElement } from '../LoadingElement'

export function Login() {
  const { LoginWithGoogle, googleUser } = useAuth()
  const navi = useNavigate()

  async function LoginWithGoogleAuth() {
    try {
      LoginWithGoogle()
      setPersistence(auth, browserLocalPersistence)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
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

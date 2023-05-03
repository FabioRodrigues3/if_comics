import { useNavigate } from 'react-router-dom'
import { Buttons, Container, LoginBox, Logo } from './styles'
import { useForm } from 'react-hook-form'
import { GoogleLogo } from 'phosphor-react'
import { useAuth } from '../../hooks/useAuth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../utils/firebase.js'

export function Login() {
  const { LoginWithGoogle, googleUser } = useAuth()
  const { register } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const navigate = useNavigate()
  const [user, loading] = useAuthState(auth)

  async function AuthWithGoogle() {
    try {
      await LoginWithGoogle()

      if (user) {
        navigate('/')
      }
    } catch (err) {}
  }

  return (
    <Container>
      <Logo>
        <h2>[ifComics]</h2>
        <p>Upload your story now</p>
      </Logo>
      <LoginBox>
        <div>
          <label htmlFor="email">Usuário</label>
          <input type="text" {...register('username')} />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input type="password" {...register('password')} />
        </div>

        <Buttons>
          <button type="button" onClick={AuthWithGoogle}>
            <GoogleLogo size={20} /> Entrar com o Google
          </button>

          <button type="submit">Entrar</button>
        </Buttons>
      </LoginBox>
    </Container>
  )
}

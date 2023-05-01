import { useNavigate } from 'react-router-dom'
import { Buttons, Container, LoginBox, Logo } from './styles'
import { useForm } from 'react-hook-form'
import { GoogleLogo } from 'phosphor-react'
import { useAuth } from '../../hooks/useAuth'

export function Login() {

  const { LoginWithGoogle, LoginWithAPI } = useAuth()
  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const navi = useNavigate();
  async function AuthenticateAPI(data) {
    await LoginWithAPI(data.email, data.password)
    console.log(data)
    navi('/')
  }

  return (
    <Container>
      <Logo>
        <h2>[ifComics]</h2>
        <p>Upload your story now</p>
      </Logo>
      <LoginBox onSubmit={handleSubmit(AuthenticateAPI)}>
        <div>
          <label htmlFor="email">Usuário</label>
          <input type="text" {...register('username')} />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input type="password" {...register('password')} />
        </div>

        <Buttons>
          <button type="button" onClick={LoginWithGoogle}>
            <GoogleLogo size={20} /> Entrar com o Google
          </button>

          <button type="submit">Entrar</button>
        </Buttons>
      </LoginBox>
    </Container>
  )
}

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Container, LoginBox, Logo } from './styles';
import { useForm } from 'react-hook-form';

export function Login() {
	const { authenticate } = useAuth();
	const history = useNavigate();
	const { register, handleSubmit, watch, reset } = useForm();

	const email = watch('email');
	const password = watch('password');

	async function AuthenticateLogin(values: {
		email: string;
		password: string;
	}) {
		try {
			await authenticate(values.email, values.password);

			history('/');
		} catch (error) {
			console.log('Não foi possível fazer o login.');
		}
		reset();
	}

	return (
		<Container>
			<Logo>
				<h2>[ifComics]</h2>
				<p>Upload your story now</p>
			</Logo>
			<LoginBox
				handleSubmit={handleSubmit(() =>
					AuthenticateLogin({ email: email, password: password })
				)}
			>
				<div>
					<label htmlFor="email">E-mail</label>
					<input name="email" type="email" {...register('email')} />
				</div>

				<div>
					<label htmlFor="password">Senha</label>
					<input name="password" type="password" {...register('password')} />
				</div>

				<div>
					<button type="submit">Entrar</button>
				</div>
			</LoginBox>
		</Container>
	);
}
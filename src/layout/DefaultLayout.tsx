import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { GlobalStyle } from '../styles/global';
import { Container } from './styles';
export function DefaultLayout() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Container>
				<Outlet />
				<Footer />
			</Container>
		</>
	);
}

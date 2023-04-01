import { Container, StyledLink } from './styles';
import { User, MagnifyingGlass } from 'phosphor-react';

export function Header() {
	return (
		<Container>
			<nav>
				<StyledLink to="/">ifComics</StyledLink>

				{/* <StyledLink to="/">
					<PlusCircle size={23} weight="fill" />
				</StyledLink> */}

				<div>
					<MagnifyingGlass size={23} />
					<input type="text" placeholder="Pesquisar" />
					<StyledLink to="/login">
						<User size={23} weight="fill" />
						Login
					</StyledLink>
				</div>
			</nav>
		</Container>
	);
}

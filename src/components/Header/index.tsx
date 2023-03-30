import { Container, StyledLink } from './styles';
import { User, HouseSimple, PlusCircle } from 'phosphor-react';

export function Header() {
	return (
		<Container>
			<nav>
				<StyledLink to="/">ifComics</StyledLink>

				{/* <StyledLink to="/">
					<PlusCircle size={23} weight="fill" />
				</StyledLink> */}

				<StyledLink to="/login">
					<User size={23} weight="fill" />
					Login
				</StyledLink>
			</nav>
		</Container>
	);
}

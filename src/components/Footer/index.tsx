import { Container, CustomSeparator, FooterContent } from './styles';

export function Footer() {
	return (
		<Container>
			<FooterContent>
				<span>ifComics</span>
				<CustomSeparator orientation="horizontal" decorative />
				<span>Todos os direitos reservados</span>
			</FooterContent>
		</Container>
	);
}

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
	position: fixed;
	width: 100%;
	z-index: 1200000;
	nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 15px 50px;
		background-color: white;
		box-shadow: 0px 0px 5px black;

		div {
			display: flex;
			gap: 1rem;
			align-items: center;

			input {
				padding: 3px;
				outline: none;
			}
		}
	}
`;

export const StyledLink = styled(Link)`
	color: black;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	text-decoration: none;
	font-size: 1rem;
	gap: 0.5rem;
	margin: 0;

	span {
		display: none;
		transition: 0.2 ease-in;
	}

	@keyframes fromRight {
		to {
			display: flex;
		}
	}

	&:hover {
		color: gray;
		transition: 0.2s ease-in;

		span {
			&:hover {
				transition: 0.2 ease-in;
				animation-name: fromRight;
				animation-duration: 4s;
			}
		}
	}
`;

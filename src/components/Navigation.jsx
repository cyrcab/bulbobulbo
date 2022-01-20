import { Link } from "react-router-dom";
import menu from "../ressources/menu.png";
import styled from "styled-components";

const Navigation = () => (
	<>
		<Link to='/'>
			<Img src={menu} alt='page accueil' />
		</Link>
		<Menu>
			<Menu>Solde</Menu>
			<Link to='/inspiration'>
				<Menu>Inspiration</Menu>
			</Link>
			<Menu>Bons plans</Menu>
			<Menu>Meilleures ventes</Menu>
		</Menu>
	</>
);

const Menu = styled.p`
	display: flex;
	justify-content: space-evenly;
	color: #1e3c87;
	font-size: 16px;
	text-decoration: none;
	font-weight: 600;
	background-color: #fdfdfd;
  margin: 0;
  padding: .5em 0;
`;

const Img = styled.img`
	width: 100%;
`;

export default Navigation;

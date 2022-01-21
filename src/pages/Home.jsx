import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import menu from "../ressources/menu.png";
import solde from "../ressources/solde.png";
import Navigation from "../components/Navigation";

const Home = () => {
	return (
		<>
			<Navigation />
			<Img src={solde} alt='page accueil' />
		</>
	);
};

const Img = styled.img`

	width: 100%;
`;

export default Home;

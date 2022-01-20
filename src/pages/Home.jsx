import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import menu from "../ressources/menu.png";
import solde from "../ressources/solde.png";

const Home = () => {
  return (
    <>
      <Img src={menu} alt="page accueil" />
      <Menu>
        <Menu>Solde</Menu>
        <Link to="/inspiration">
          <Menu>Inspiration</Menu>
        </Link>
        <Menu>Bons plans</Menu>
        <Menu>Meilleures ventes</Menu>
      </Menu>
      <Img src={solde} alt="page accueil" />
    </>
  );
};

const Img = styled.img`
  width: 100%;
`;

const Menu = styled.p`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  color: #1e3c87;
  font-size: 16px;
  text-decoration: none;
  font-weight: 600;
`;

const Button = styled.button``;

export default Home;

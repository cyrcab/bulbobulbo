import { Link } from "react-router-dom";
import { useState } from "react";
import menu from "../ressources/menu.png";
import styled from "styled-components";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Link to="/">
        <Img src={menu} alt="page accueil" />
      </Link>
      <Menu>
        <Menu>Solde</Menu>
        <Link to="/inspiration">
          <Menu>Inspiration</Menu>
        </Link>
        <Menu>Bons plans</Menu>
        <Menu>Meilleures ventes</Menu>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav``;

const Menu = styled.p`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  color: #1e3c87;
  font-size: 16px;
  text-decoration: none;
  font-weight: 600;
`;

const Img = styled.img`
  width: 100%;
`;

export default Navigation;

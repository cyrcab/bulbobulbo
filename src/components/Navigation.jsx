import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../ressources/logo.png';
import styled from 'styled-components';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <Nav>
        <Link to="/">
          <Logo src={logo} alt="Mano Mano" />
        </Link>
        <Burger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Burger>
        <Menu isOpen={isOpen}>
          <Link to="/">
            <MenuLink>Inspiration</MenuLink>
          </Link>
        </Menu>
      </Nav>
    );
  };

const Nav = styled.nav`
  `;

const Logo = styled.img`
`;

const Burger = styled.div`
`;

const Menu = styled.div`
`;

const MenuLink = styled.div`
`;

export default Navigation;
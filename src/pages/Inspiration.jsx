import styled from "styled-components";
import { Link } from "react-router-dom";
import Scandinave from "../ressources/style-scandinave.png";
import Industriel from "../ressources/style-industriel.jpg";
import Baroque from "../ressources/style-baroque.jpg";
import Zen from "../ressources/style-zen.jpg";
import Vintage from "../ressources/style-vintage.jpg";
import Navigation from "../components/Navigation";

const PageStyle = () => {
  return (
    <>
      <Navigation />
      <MainContainer>
        <Title>Choisissez le style qui correspond à votre projet</Title>
        <Link to="/scandinavianStyle">
          <CardStyle>
            <Image src={Scandinave} width="90%" />
            <StyleName>Scandinave</StyleName>
          </CardStyle>
        </Link>
        <Link to="/industrialStyle">
          <CardStyle>
            <Image src={Industriel} width="90%" />
            <StyleName>Industriel</StyleName>
          </CardStyle>
        </Link>

        <CardStyle>
          <Image src={Baroque} width="90%" />
          <StyleName>Baroque</StyleName>
        </CardStyle>
        <CardStyle>
          <Image src={Zen} width="90%" />
          <StyleName>Zen</StyleName>
        </CardStyle>
        <CardStyle>
          <Image src={Vintage} width="90%" />
          <StyleName>Vintage</StyleName>
        </CardStyle>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.h2`
  @media (max-width: 768px) {
  }
`;

const CardStyle = styled.div`
  @media (max-width: 768px) {
    background-color: #d8dad8;
    width: 90%;
    font-size: 1.3em;
    font-weight: lighter;
    margin: auto;
    margin-bottom: 15px;
    border-radius: 10px;
    transition: background-color 2s ease-out;

    &:hover {
      background-color: #00398a; //couleur logo Mano-Mano
      color: white;
    }
  }
`;

const Image = styled.img`
  @media (max-width: 768px) {
    margin-top: 10px;
    border-radius: 10px;
  }
`;

const StyleName = styled.p`
  @media (max-width: 768px) {
  }
`;

export default PageStyle;

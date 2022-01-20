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
        <Title>Vous cherchez l’inspiration ?</Title>
        <p>Vous êtes au bon endroit. 
Pour vous, Mano Mano a sélectionné les plus belles idées pour imaginer un intérieur ou un extérieur
qui vous ressemble !
</p>
        <Link to="/scandinavianStyle">
          <StyleName>Scandinave</StyleName>
          <CardStyle>
            <Image src={Scandinave} width="90%" />
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
  font-size: 23px;
  color: #1e3c87;
  /* color: #01aead; */
  @media (max-width: 768px) {
  }
`;

const CardStyle = styled.div`
  @media (max-width: 768px) {
    background-color: #f5f6f7;
    width: 90%;
    font-size: 1.3em;
    font-weight: lighter;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 8px;
    transition: background-color 2s ease-out;
    border: 1px solid #ecedf0;
    border-radius: 4px;
    box-shadow: 0 2px 6px 0 rgb(0 0 0 / 8%);

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
  color: #1e3c87;
  font-family: Open Sans, mm-main, arial, sans-serif;
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 768px) {
  }
`;

export default PageStyle;

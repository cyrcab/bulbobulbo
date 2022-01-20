import styled from "styled-components";
import LivingRoom from "../components/interactiveImg/scandinav/LivingRoom";
import Kitchen from "../components/interactiveImg/scandinav/Kitchen";
import Bathroom from "../components/interactiveImg/scandinav/Bathroom";
import Bedroom from "../components/interactiveImg/scandinav/Bedroom";
import Garden from "../components/interactiveImg/scandinav/Garden";
import Navigation from "../components/Navigation";

const PageRoomScandinave = () => {
  return (
    <MainContainer>
      <Navigation />
      <Title>Choisissez la pièce de votre projet</Title>
      <CardStyle>
        <LivingRoom />
        <StyleName>Salle à manger</StyleName>
      </CardStyle>
      <CardStyle>
        <Kitchen />
        <StyleName>Cuisine</StyleName>
      </CardStyle>
      <CardStyle>
        <Bathroom />
        <StyleName>Salle de bain</StyleName>
      </CardStyle>
      <CardStyle>
        <Bedroom />
        <StyleName>Chambre</StyleName>
      </CardStyle>
      <CardStyle>
        <Garden />
        <StyleName>Jardin</StyleName>
      </CardStyle>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.h2`
font-size : 23px;
color: #1e3c87;
  @media (max-width: 768px) {
  }
`;

const CardStyle = styled.div`
  /* position: relative;
    display: flex;
    flex-direction: row;
    padding: 16px;
    min-width: 320px;
    max-width: 341px;
    max-height: 245px;
    border: 1px solid #ECEDF0;
    border-radius: 4px;
    box-shadow: 0 2px 6px 0 rgb(0 0 0 / 8%);
    transition: box-shadow .3s ease;
    box-sizing: border-box;
    background-color: #fff;
    text-decoration: none;
    outline: none;
} */
  @media (max-width: 768px) {
    background-color: #f5f6f7;
    width: 90%;
    font-size: 1.3em;
    font-weight: lighter;
    margin: auto;
    margin-bottom: 15px;
    transition: background-color 2s ease-out;
    border: 1px solid #ecedf0;
    border-radius: 4px;
    box-shadow: 0 2px 6px 0 rgb(0 0 0 / 8%);

    /* &:hover {
      background-color: #00398a; //couleur logo Mano-Mano
      color: white;
    } */
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

export default PageRoomScandinave;

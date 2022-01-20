import styled from "styled-components";
import { IndustrialContextProvider } from "../context/IndustrialContext";
import Kitchen from "../components/interactiveImg/industrial/Kitchen";
import Bathroom from "../components/interactiveImg/industrial/Bathroom";
import Bedroom from "../components/interactiveImg/industrial/Bedroom";
import Garden from "../components/interactiveImg/industrial/Garden";
import LivingRoom from "../components/interactiveImg/industrial/LivingRoom";
import Navigation from "../components/Navigation";
import DivInfos from "../components/divInfos/InfosContainer";

const PageRoomIndustrial = () => {
  return (
    <IndustrialContextProvider>
      <Navigation />
      <MainContainer>
        <Title>Choisissez</Title>
        <CardStyle>
          <LivingRoom />
          <StyleName>Salle à manger</StyleName>
        </CardStyle>
        <DivInfos />
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
    </IndustrialContextProvider>
  );
};

const MainContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h2`
  font-size: 23px;
  color: #1e3c87;
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

const StyleName = styled.p`
  color: #1e3c87;
  font-family: Open Sans, mm-main, arial, sans-serif;
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 768px) {
  }
`;

export default PageRoomIndustrial;

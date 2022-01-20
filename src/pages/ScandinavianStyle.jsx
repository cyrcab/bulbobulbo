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
        </ MainContainer>
    );
};

const MainContainer = styled.div`

@media (max-width: 768px){
    display: flex;
    flex-direction: column;
}
`;

const Title = styled.h2`

@media (max-width: 768px){
}
`;

const CardStyle = styled.div`

@media (max-width: 768px){
    background-color: #D8DAD8;
    width: 90%;
    font-size: 1.3em;
    font-weight: lighter;
    margin: auto;
    margin-bottom: 15px;
    border-radius: 10px;
    transition: background-color 2s ease-out;

    &:hover{
        background-color: #00398A; //couleur logo Mano-Mano
        color: white;
    }
}
`;

const Image = styled.img`

@media (max-width: 768px){
    margin-top: 10px;
    border-radius: 10px;
}
`;

const StyleName = styled.p`

@media (max-width: 768px){
}

`;

export default PageRoomScandinave;
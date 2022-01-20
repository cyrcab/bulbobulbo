import styled from "styled-components";
import Salon from "../ressources/salle-a-manger-scandinave.jpg";
import Cuisine from "../ressources/cuisine-scandinave.jpg";
import SalleDeBain from "../ressources/salle-de-bain-scandinave.jpg";
import Chambre from "../ressources/chambre-scandinave.jpg";
import Jardin from "../ressources/jardin-scandinave.jpg";

const PageRoomScandinave = () => {
    return (
        <MainContainer>
            <Title>Choisissez la pièce de votre projet</Title>
            <CardStyle>
                <Image src={Salon} width="90%" />
                <StyleName>Salle à manger</StyleName>
            </CardStyle>
            <CardStyle>
                <Image src={Cuisine} width="90%" />
                <StyleName>Cuisine</StyleName>
            </CardStyle>
            <CardStyle>
                <Image src={SalleDeBain} width="90%" />
                <StyleName>Salle de bain</StyleName>
            </CardStyle>
            <CardStyle>
                <Image src={Chambre} width="90%" />
                <StyleName>Chambre</StyleName>
            </CardStyle>
            <CardStyle>
                <Image src={Jardin} width="90%" />
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
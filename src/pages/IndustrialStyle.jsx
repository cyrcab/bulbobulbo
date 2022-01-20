import styled from "styled-components";
import { IndustrialContextProvider } from "../context/IndustrialContext";
import Kitchen from "../components/interactiveImg/industrial/Kitchen";
import Bathroom from "../components/interactiveImg/industrial/Bathroom";
import Bedroom from "../components/interactiveImg/industrial/Bedroom";
import Garden from "../components/interactiveImg/industrial/Garden";
import LivingRoom from "../components/interactiveImg/industrial/LivingRoom";
import Navigation from "../components/Navigation";
import DivInfos from "../components/Tags/divInfos";

const PageRoomIndustrial = () => {
	return (
		<IndustrialContextProvider>
			<MainContainer>
				<Navigation />
				<Title>Choisissez la pièce de votre projet</Title>
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

const StyleName = styled.p`
	@media (max-width: 768px) {
	}
`;

export default PageRoomIndustrial;

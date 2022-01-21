import styled from "styled-components";
import { IndustrialContextProvider } from "../context/IndustrialContext";
import Kitchen from "../components/interactiveImg/industrial/Kitchen";
import Bathroom from "../components/interactiveImg/industrial/Bathroom";
import Bedroom from "../components/interactiveImg/industrial/Bedroom";
import Garden from "../components/interactiveImg/industrial/Garden";
import LivingRoom from "../components/interactiveImg/industrial/LivingRoom";
import Navigation from "../components/Navigation";
import DivInfos from "../components/divInfos/InfosContainer";
import arrowBack from "../ressources/VectorarrowBack.png";

const PageRoomIndustrial = () => {
	return (
		<IndustrialContextProvider>
			<Navigation />
			<MainContainer>
				<Header>
					<TitleHeader>Industriel</TitleHeader>
				</Header>
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
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const CardStyle = styled.div`
	border: 1px solid #ecedf0;
	border-radius: 6px;
	text-align: center;
	width: 90%;
	background-color: #fdfdfd;
	font-size: 1.3em;
	font-weight: lighter;
	margin: auto;
	margin-bottom: 8px;
	margin-top: 1.5em;
	transition: background-color 2s ease-out;
	box-shadow: 0 2px 6px 0 rgb(0 0 0 / 8%);
`;

const StyleName = styled.p`
	background-color: #fdfdfd;
	color: #1e3c87;
	font-family: Open Sans, mm-main, arial, sans-serif;
	font-size: 20px;
	font-weight: bold;
	padding: 0.5em 0;
	border-radius: 6px;
`;
const Header = styled.div`
	text-align: center;
	width: 90%;
	margin-top: 1.5em;
`;
const TitleHeader = styled.h1`
	font-size: 2em;
	color: #20448C;
`;
export default PageRoomIndustrial;

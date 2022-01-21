import styled from "styled-components";
import LivingRoom from "../components/interactiveImg/scandinav/LivingRoom";
import Kitchen from "../components/interactiveImg/scandinav/Kitchen";
import Bathroom from "../components/interactiveImg/scandinav/Bathroom";
import Bedroom from "../components/interactiveImg/scandinav/Bedroom";
import Garden from "../components/interactiveImg/scandinav/Garden";
import Navigation from "../components/Navigation";

const PageRoomScandinave = () => (
	<MainContainer>
		<Navigation />
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

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const Title = styled.h2`
	font-size: 23px;
	color: #1e3c87;
`;

const CardStyle = styled.div`
	text-align: center;
	width: 90%;
	background-color: #fdfdfd;
	font-size: 1.3em;
	font-weight: lighter;
	margin: auto;
	margin-bottom: 8px;
	margin-top: 2em;
	border: 1px solid #ecedf0;
	border-radius: 6px;
	transition: background-color 2s ease-out;
	box-shadow: 0 2px 6px 0 rgb(0 0 0 / 8%);
`;

const StyleName = styled.p`
	color: #1e3c87;
	font-family: Open Sans, mm-main, arial, sans-serif;
	font-size: 20px;
	font-weight: bold;
	padding: 0.5em 0;
`;

export default PageRoomScandinave;

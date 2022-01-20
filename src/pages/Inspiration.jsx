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
				<p>
					Vous êtes au bon endroit. Pour vous, Mano Mano a sélectionné les plus belles idées pour
					imaginer un intérieur ou un extérieur qui vous ressemble !
				</p>

				<Link to='/scandinavianStyle'>
					<CardStyle>
						<ImageContainer>
							<Image src={Scandinave} />
						</ImageContainer>
						<StyleName>Scandinave</StyleName>
					</CardStyle>
				</Link>

				<Link to='/industrialStyle'>
					<CardStyle>
						<ImageContainer>
							<Image src={Industriel} />
							<StyleName>Industriel</StyleName>
						</ImageContainer>
					</CardStyle>
				</Link>

				<CardStyle>
					<ImageContainer>
						<Image src={Baroque} />
						<StyleName>Baroque</StyleName>
					</ImageContainer>
				</CardStyle>
				<CardStyle>
					<ImageContainer>
						<Image src={Zen} />
						<StyleName>Zen</StyleName>
					</ImageContainer>
				</CardStyle>
				<CardStyle>
					<ImageContainer>
						<Image src={Vintage} />
						<StyleName>Vintage</StyleName>
					</ImageContainer>
				</CardStyle>
			</MainContainer>
		</>
	);
};

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
`;

const Title = styled.h2`
	margin: 3em 0 1em 0;
	font-size: 23px;
	color: #1e3c87;
`;

const CardStyle = styled.div`
	width: 90%;
	background-color: #fdfdfd;
	font-size: 1.3em;
	font-weight: lighter;
	margin: auto;
	margin-top: 2em;
	margin-bottom: 8px;
	transition: background-color 2s ease-out;
	border: 1px solid #ecedf0;
	border-radius: 6px;
	box-shadow: 0 2px 6px 0 rgb(0 0 0 / 8%);

	&:hover {
		background-color: #00398a; //couleur logo Mano-Mano
		color: white;
	}
`;

const ImageContainer = styled.div`
	margin-top: 10px;
`;
const Image = styled.img`
	height: 200px;
	width: 95%;
`;

const StyleName = styled.p`
	color: #1e3c87;
	font-family: Open Sans, mm-main, arial, sans-serif;
	font-size: 20px;
	font-weight: bold;
	padding: 0.5em 0;
`;

export default PageStyle;

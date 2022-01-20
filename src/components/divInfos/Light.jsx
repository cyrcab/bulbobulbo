import light from "../../ressources/light-indus.jpg";
import InfoDiv, {
	Img,
	AsideDiv,
	DivTitle,
	PriceTitle,
	AddToBasket,
	OpinionDiv,
	OpinionImg,
} from "./styledDiv";
import stars from "../../ressources/stars.png";

const Light = () => {
	return (
		<InfoDiv>
			<Img src={light} />
			<AsideDiv>
				<DivTitle> Suspension loft industrielle</DivTitle>
				<OpinionDiv>
					<OpinionImg src={stars} />
					13 Avis
				</OpinionDiv>
				<PriceTitle>99€</PriceTitle>
				<AddToBasket>Ajouter au panier</AddToBasket>
			</AsideDiv>
		</InfoDiv>
	);
};

export default Light;

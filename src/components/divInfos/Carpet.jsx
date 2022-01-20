import carpet from "../../ressources/carpet_indus.jpeg";
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

const Carpet = () => {
	return (
		<InfoDiv>
			<Img src={carpet} />
			<AsideDiv>
				<DivTitle> Carpet style industriel</DivTitle>
				<OpinionDiv>
					<OpinionImg src={stars} />
					12 Avis
				</OpinionDiv>
				<PriceTitle>123€</PriceTitle>
				<AddToBasket>Ajouter au panier</AddToBasket>
			</AsideDiv>
		</InfoDiv>
	);
};

export default Carpet;

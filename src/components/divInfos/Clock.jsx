import clock from "../../ressources/horloge-indus.jpg";
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

const Clock = () => {
	return (
		<InfoDiv>
			<Img src={clock} />
			<AsideDiv>
				<DivTitle> Horloge murale vintage industriel</DivTitle>
				<OpinionDiv>
					<OpinionImg src={stars} />
					80 Avis
				</OpinionDiv>
				<PriceTitle>68€99</PriceTitle>
				<AddToBasket>Ajouter au panier</AddToBasket>
			</AsideDiv>
		</InfoDiv>
	);
};

export default Clock;

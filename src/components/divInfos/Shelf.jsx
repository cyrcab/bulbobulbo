import shelf from "../../ressources/shelf-indus.jpg";
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

const Shelf = () => {
	return (
		<InfoDiv>
			<Img src={shelf} />
			<AsideDiv>
				<DivTitle> Etagère style industriel</DivTitle>
				<OpinionDiv>
					<OpinionImg src={stars} />
					42 Avis
				</OpinionDiv>
				<PriceTitle>69€90</PriceTitle>
				<AddToBasket>Ajouter au panier</AddToBasket>
			</AsideDiv>
		</InfoDiv>
	);
};

export default Shelf;

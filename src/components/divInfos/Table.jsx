import table from "../../ressources/table-indus.jpg";
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
			<Img src={table} />
			<AsideDiv>
				<DivTitle> Table style industriel</DivTitle>
				<OpinionDiv>
					<OpinionImg src={stars} />
					45 Avis
				</OpinionDiv>
				<PriceTitle>169€90</PriceTitle>
				<AddToBasket>Ajouter au panier</AddToBasket>
			</AsideDiv>
		</InfoDiv>
	);
};

export default Shelf;

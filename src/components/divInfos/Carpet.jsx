import carpet from "../../ressources/carpet_indus.jpeg";
import InfoDiv, { Img, AsideDiv, DivTitle, PriceTitle, AddToBasket } from "./styledDiv";

const Carpet = () => {
	return (
		<InfoDiv>
			<Img src={carpet} />
			<AsideDiv>
				<DivTitle> Carpet style industriel</DivTitle>
				Avis
				<PriceTitle>123€</PriceTitle>
				<AddToBasket>Ajouter au panier</AddToBasket>
			</AsideDiv>
		</InfoDiv>
	);
};

export default Carpet;

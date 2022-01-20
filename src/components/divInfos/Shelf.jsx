import shelf from "../../ressources/shelf-indus.jpg";
import InfoDiv, { Img, AsideDiv, DivTitle, PriceTitle, AddToBasket } from "./styledDiv";

const Shelf = () => {
  return (
    <InfoDiv>
      <Img src={shelf} />
      <AsideDiv>
        <DivTitle> Etagère style industriel</DivTitle>
        Avis
        <PriceTitle>69€90</PriceTitle>
        <AddToBasket>Ajouter au panier</AddToBasket>
      </AsideDiv>
    </InfoDiv>
  );
};

export default Shelf;
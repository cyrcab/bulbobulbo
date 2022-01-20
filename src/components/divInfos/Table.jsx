import table from "../../ressources/table-indus.jpg";
import InfoDiv, { Img, AsideDiv, DivTitle, PriceTitle, AddToBasket } from "./styledDiv";

const Shelf = () => {
  return (
    <InfoDiv>
      <Img src={table} />
      <AsideDiv>
        <DivTitle> Table style industriel</DivTitle>
        Avis
        <PriceTitle>169€90</PriceTitle>
        <AddToBasket>Ajouter au panier</AddToBasket>
      </AsideDiv>
    </InfoDiv>
  );
};

export default Shelf;
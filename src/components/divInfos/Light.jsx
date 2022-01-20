import light from "../../ressources/light-indus.jpg";
import InfoDiv, { Img, AsideDiv, DivTitle, PriceTitle, AddToBasket } from "./styledDiv";

const Light = () => {
  return (
    <InfoDiv>
      <Img src={light} />
      <AsideDiv>
        <DivTitle> Suspension loft industrielle</DivTitle>
        Avis
        <PriceTitle>99€</PriceTitle>
        <AddToBasket>Ajouter au panier</AddToBasket>
      </AsideDiv>
    </InfoDiv>
  );
};

export default Light;

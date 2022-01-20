import clock from "../../ressources/horloge-indus.jpg";
import InfoDiv, { Img, AsideDiv, DivTitle, PriceTitle, AddToBasket } from "./styledDiv";

const Clock = () => {
  return (
    <InfoDiv>
      <Img src={clock} />
      <AsideDiv>
        <DivTitle> Horloge murale vintage industriel</DivTitle>
        Avis
        <PriceTitle>68€99</PriceTitle>
        <AddToBasket>Ajouter au panier</AddToBasket>
      </AsideDiv>
    </InfoDiv>
  );
};

export default Clock;

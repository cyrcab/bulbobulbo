import carpet from "../../ressources/carpet_indus.jpeg";
import InfoDiv, { Img, AsideDiv, DivTitle, PriceTitle } from "./styledDiv";

const Carpet = () => {
  return (
    <InfoDiv>
      <Img src={carpet} />
      <AsideDiv>
        <DivTitle> Carpet style industriel</DivTitle>
        Avis
        <PriceTitle>123€</PriceTitle>
      </AsideDiv>
    </InfoDiv>
  );
};

export default Carpet;

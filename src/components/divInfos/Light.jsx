import light from "../../ressources/light-indus.jpg";
import InfoDiv, { Img, AsideDiv, DivTitle, PriceTitle } from "./styledDiv";

const Light = () => {
  return (
    <InfoDiv>
      <Img src={light} />
      <AsideDiv>
        <DivTitle> Suspension loft industrielle</DivTitle>
        Avis
        <PriceTitle>99€</PriceTitle>
      </AsideDiv>
    </InfoDiv>
  );
};

export default Light;

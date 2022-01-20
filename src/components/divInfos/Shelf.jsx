import shelf from "../../ressources/shelf-indus.jpg";
import InfoDiv, { Img, AsideDiv, DivTitle, PriceTitle } from "./styledDiv";

const Shelf = () => {
  return (
    <InfoDiv>
      <Img src={shelf} />
      <AsideDiv>
        <DivTitle> Etagère style industriel</DivTitle>
        Avis
        <PriceTitle>69€90</PriceTitle>
      </AsideDiv>
    </InfoDiv>
  );
};

export default Shelf;
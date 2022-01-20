import table from "../../ressources/table-indus.jpg";
import InfoDiv, { Img, AsideDiv, DivTitle, PriceTitle } from "./styledDiv";

const Shelf = () => {
  return (
    <InfoDiv>
      <Img src={table} />
      <AsideDiv>
        <DivTitle> Table style industriel</DivTitle>
        Avis
        <PriceTitle>169€90</PriceTitle>
      </AsideDiv>
    </InfoDiv>
  );
};

export default Shelf;
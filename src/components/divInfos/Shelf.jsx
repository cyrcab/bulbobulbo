import shelf from "../../ressources/shelf-indus.jpg";
import InfoDiv, { Img, AsideDiv, DivTitle, PriceTitle } from "./styledDiv";
import CarouselSlider from 'react-carousel-slider';
import styled from "styled-components";

let data = [
  {
    imgSrc: "src/ressources/sh1.jpg",
  },
  {
    imgSrc: "src/ressources/sh2.jpg",
  },
  {
    imgSrc: "src/ressources/sh3.jpg",
  },
];

/* Percantage to set height does not work well 
  in prop sliderBoxStyle here because we could 
  not init the height of parent element */

let sliderBoxStyle = {
  height: "200px",
  //, width: "200px"
  // , background: "tranparent"
};

let itemsStyle = {
  // ,height: "100%", padding: "0px"
  // , padding: "15px"
  // , background: "#FFCA28"
  // , borderRadius: "4px"
  // , margin: "0px 0px", padding: "0px"
};

let textBoxStyle = {
  // textAlign: "left"
  // ,width:"50%"
  // , background: "transparent"
  // , fontSize: "36px"
  // , fontWeight: 300
};

let buttonSetting = {
  // placeOn: "middle-inside"
  // ,hoverEvent: true,
  // , style: {
  //   left: {
  //     margin: "0px 0px 0px 10px"
  //   },
  //   right: {
  //     margin: "0px 10px 0px 0px"
  //   }
  // }
};

let manner = {
  // autoSliding: {interval: "4s"}
  //, duration: "0.3s"
};

const Shelf = () => {
  return (
    <><InfoDiv>
      <Img src={shelf} />
      <AsideDiv>
        <DivTitle> Etagère style industriel</DivTitle>
        <h3>Avis</h3>
          <Svg src="src/ressources/ratings.svg" alt="ratings" />
        <PriceTitle>69€90</PriceTitle>
      </AsideDiv>
    </InfoDiv><CarouselSlider
        slideItems={data}
        manner={manner}
        buttonSetting={buttonSetting}
        sliderBoxStyle={sliderBoxStyle}
        itemsStyle={itemsStyle}
        textBoxStyle={textBoxStyle} /></>
  );
};

const Svg = styled.img`
  width: 185px;
`;

export default Shelf;
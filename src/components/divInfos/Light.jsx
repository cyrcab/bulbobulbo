import light from "../../ressources/light-indus.jpg";
import CarouselSlider from 'react-carousel-slider';
import InfoDiv, {
	Img,
	AsideDiv,
	DivTitle,
	PriceTitle,
	AddToBasket,
	OpinionDiv,
	OpinionImg,
} from "./styledDiv";
import stars from "../../ressources/stars.png";

let data = [
  {
    des: "23€99",
    imgSrc: "src/ressources/li1.jpg",
  },
  {
    des: "94€99",
    imgSrc: "src/ressources/li2.jpg",
  },
  {
    des: "99€99",
    imgSrc: "src/ressources/li3.jpg",
  },
];


/* Percantage to set height does not work well 
  in prop sliderBoxStyle here because we could 
  not init the height of parent element */

  let sliderBoxStyle = {
    height: "200px",
    //, width: "200px"
    background: "white"
  };
  
  let itemsStyle = {
    // ,height: "100%", padding: "0px"
    // , padding: "15px"
    // , background: "#FFCA28"
    // , borderRadius: "4px"
    // , margin: "0px 0px", padding: "0px"
  };
  
  let textBoxStyle = {
    width: "40%",
    background: "white",
    color: "black",
    fontSize: "25px"
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

const Light = () => {
  return (
    <><InfoDiv>
      <Img src={light} />
      <AsideDiv>
        <DivTitle> Suspension loft industrielle</DivTitle>
        Avis
        <PriceTitle>99€</PriceTitle>
      </AsideDiv>
    </InfoDiv><CarouselSlider
        slideItems={data}
        manner={manner}
        buttonSetting={buttonSetting}
        sliderBoxStyle={sliderBoxStyle}
        itemsStyle={itemsStyle}
        textBoxStyle={textBoxStyle} />
	</>
	);

export default Light;

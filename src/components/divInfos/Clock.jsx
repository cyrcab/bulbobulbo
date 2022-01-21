import CarouselSlider from "react-carousel-slider";
import clock from "../../ressources/horloge-indus.jpg";
import stars from "../../ressources/stars.png";
import InfoDiv, {
	Img,
	AsideDiv,
	DivTitle,
	PriceTitle,
	AddToBasket,
	OpinionDiv,
	OpinionImg,
} from "./styledDiv";

let data = [
  {
    des: '48€99',
    imgSrc: "src/ressources/cloc1.jpg",
  },
  {
    des: '28€99',
    imgSrc: "src/ressources/cloc2.jpg",
  },
  {
    des: '68€99',
    imgSrc: "src/ressources/cloc3.jpg",
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
  width: "30%",
  background: "white",
  color: "black",
  fontSize: "20px"
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
const Clock = () => (
  <>

		<InfoDiv>
			<Img src={clock} />
			<AsideDiv>
				<DivTitle> Horloge murale vintage industriel</DivTitle>
				<OpinionDiv>
					<OpinionImg src={stars} />
					80 Avis
				</OpinionDiv>
				<PriceTitle>68€99</PriceTitle>
				<AddToBasket>Ajouter au panier</AddToBasket>
			</AsideDiv>
		</InfoDiv>
    <CarouselSlider
        slideItems={data}
        manner={manner}
        buttonSetting={buttonSetting}
        sliderBoxStyle={sliderBoxStyle}
        itemsStyle={itemsStyle}
        textBoxStyle={textBoxStyle}
      />
  </>
	);


export default Clock;

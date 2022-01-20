import styled from "styled-components";

const InfoDiv = styled.div`
	display: flex;
	background-color: #fdfdfd;
	justify-content: space-around;
	align-items: center;
	margin: 1em 0 1em 0;
	width: 90%;
	box-shadow: 0px 6px 20px 9px rgba(0, 0, 0, 0.1);
	border-radius: 6px;
	padding: 1em 0;
`;
const Img = styled.img`
	width: 125px;
	height: 100px;
`;
const AsideDiv = styled.div`
	width: 60%;
	display: flex;
	flex-direction: column;
	background-color: white;
	border-radius: 0 5px 5px 0;
`;
const DivTitle = styled.h2`
	font-size: 1em;
	color: #20448c;
	margin-bottom: 0.5em;
`;
const PriceTitle = styled.h3`
	margin-top: 0.5em;
	font-size: 1.4em;
	font-weight: bold;
`;

const AddToBasket = styled.button`
	border: 1px solid #20448c;
	background-color: #fdfdfd;
	color: #20448c;
	padding: 0.5em;
	font-size: 1em;
	border-radius: 6px;
	margin-top: .5em;
`;

const OpinionDiv = styled.div`
	display: flex;
	width: 78%;
	justify-content: space-between;
`;


const OpinionImg = styled.img`

`

export default InfoDiv;

export { Img, AsideDiv, DivTitle, PriceTitle, AddToBasket, OpinionDiv, OpinionImg };

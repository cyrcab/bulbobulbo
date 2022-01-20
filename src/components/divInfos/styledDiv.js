import styled from "styled-components";

const InfoDiv = styled.div`
	display: flex;
	justify-content: center;
	margin: 1em 0 1em 0;
	width: 90%;
	box-shadow: 0px 6px 10px -6px rgba(0,0,0,0.3);
`;
const Img = styled.img`
	width: 40%;
	border-radius: 5px;
	border-radius: 5px 0 0 5px;
	border-top: 1px rgba(128, 128, 128, 0.4) solid;
	border-right: 1px rgba(128, 128, 128, .4) solid;
	border-bottom: 1px rgba(128, 128, 128, .4) solid;
`;
const AsideDiv = styled.div`
	width: 60%;
	background-color: white;
	border-radius: 0 5px 5px 0;
	border-top: 1px rgba(128, 128, 128, 0.4) solid;
	border-right: 1px rgba(128, 128, 128, 0.4) solid;
	border-bottom: 1px rgba(128, 128, 128, 0.4) solid;
`;
const DivTitle = styled.h2`
    font-size: 1.2em;
    color: #20448C;
`;
const PriceTitle = styled.h3`
    font-size: 1.4em;
    font-weight: bold;
`;

export default InfoDiv;

export { Img, AsideDiv, DivTitle, PriceTitle };

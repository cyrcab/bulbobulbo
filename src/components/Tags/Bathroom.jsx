import Tag from "./Tags";
import styled from "styled-components";

const Toilet = styled.div`
	background: none;
	position: absolute;
	left: 2em;
	bottom: 2.5em;
`;
const Floor = styled.div`
	background: none;
	position: absolute;
	left: 50%;
	bottom: 0.5em;
`;
const Shower = styled.div`
	background: none;
	position: absolute;
	right: 2em;
	top: 2.5em;
`;
const Mirror = styled.div`
	background: none;
	position: absolute;
	right: 50%;
	top: 2.5em;
`;
const Cutlery = styled.div`
	background: none;
	position: absolute;
	right: 50%;
	top: 50%;
`;

const Bathroom = () => (
	<>
		<Toilet>
			<Tag />
		</Toilet>
		<Floor>
			<Tag />
		</Floor>
		<Shower>
			<Tag />
		</Shower>
		<Mirror>
			<Tag />
		</Mirror>
		<Cutlery>
			<Tag />
		</Cutlery>
	</>
);

export default Bathroom;

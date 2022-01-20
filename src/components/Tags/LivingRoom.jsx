import Tag from "./Tags";
import styled from "styled-components";
import { useState } from "react";

const Shelf = styled.div`
	position: absolute;
	left: 2em;
	bottom: 2.5em;
`;
const Carpet = styled.div`
	position: absolute;
	left: 50%;
	bottom: 0.5em;
`;
const Clock = styled.div`
	position: absolute;
	right: 2em;
	top: 2.5em;
`;
const Light = styled.div`
	position: absolute;
	right: 50%;
	top: 2.5em;
`;
const Table = styled.div`
	position: absolute;
	right: 50%;
	top: 50%;
`;

const LivingRoom = () => {
	const [isClicked, setIsClicked] = useState({
		shelf: false,
		carpet: false,
		clock: false,
		light: false,
		table: false,
	});
	const [tagValue, setTagValue] = useState("");
	const handleClick = (e) => {
		setTagValue(e.target.value);
	};
	return (
		<>
			<Shelf>
				<Tag value='shelf' onClick={() => setIsClicked({...isClicked, shelf: !isClicked.shelf })} />
			</Shelf>
			<Carpet>
				<Tag onClick={handleClick} />
			</Carpet>
			<Clock>
				<Tag onClick={handleClick} />
			</Clock>
			<Light>
				<Tag onClick={handleClick} />
			</Light>
			<Table>
				<Tag onClick={handleClick} />
			</Table>
		</>
	);
};

export default LivingRoom;

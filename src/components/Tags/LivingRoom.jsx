import Tag from "./Tags";
import styled from "styled-components";
import { useState, useContext } from "react";
import IndustrialContext from "../../context/IndustrialContext";

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
	const { isClicked, setIsClicked } = useContext(IndustrialContext);

	return (
		<>
			<Shelf>
				<Tag
					value='shelf'
					onClick={() =>
						setIsClicked({
							shelf: !isClicked.shelf,
							carpet: false,
							clock: false,
							light: false,
							table: false,
						})
					}
				/>
			</Shelf>
			<Carpet>
				<Tag
					value='carpet'
					onClick={() =>
						setIsClicked({
							shelf: false,
							carpet: !isClicked.carpet,
							clock: false,
							light: false,
							table: false,
						})
					}
				/>
			</Carpet>
			<Clock>
				<Tag
					value='clock'
					onClick={() =>
						setIsClicked({
							shelf: false,
							carpet: false,
							clock: !isClicked.clock,
							light: false,
							table: false,
						})
					}
				/>
			</Clock>
			<Light>
				<Tag
					value='light'
					onClick={() =>
						setIsClicked({
							shelf: false,
							carpet: false,
							clock: false,
							light: !isClicked.light,
							table: false,
						})
					}
				/>
			</Light>
			<Table>
				<Tag
					value='table'
					onClick={() =>
						setIsClicked({
							shelf: false,
							carpet: false,
							clock: false,
							light: false,
							table: !isClicked.table,
						})
					}
				/>
			</Table>
		</>
	);
};

export default LivingRoom;

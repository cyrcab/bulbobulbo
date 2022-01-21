import Tag from "./Tags";
import styled from "styled-components";
import { useState, useContext } from "react";
import IndustrialContext from "../../context/IndustrialContext";

const Shelf = styled.div`
	background: none;
	position: absolute;
	left: 1.5em;
	bottom: 5em;
`;
const Carpet = styled.div`
	background: none;
	position: absolute;
	left: 50%;
	bottom: 0.5em;
`;
const Clock = styled.div`
	background: none;
	position: absolute;
	right: 1em;
	top: 3em;
`;
const Light = styled.div`
	background: none;
	position: absolute;
	right: 50%;
	top: 2.5em;
`;
const Table = styled.div`
	background: none;
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

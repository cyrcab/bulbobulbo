import Tag from "./Tags";
import styled from "styled-components";

const Shelf = styled.div`
	position: absolute;
	left: 2em;
	bottom: 2.5em;
`;
const Carpet = styled.div`
	position: absolute;
	left: 50%;
	bottom: .5em;
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

const LivingRoom = () => (
	<>
		<Shelf>
			<Tag />
		</Shelf>
        <Carpet>
            <Tag />
        </Carpet>
        <Clock>
            <Tag />
        </Clock>
        <Light>
            <Tag />
        </Light>
        <Table>
            <Tag />
        </Table>
	</>
);

export default LivingRoom;

import Tag from "./Tags";
import styled from "styled-components";

const Stool = styled.div`
	position: absolute;
	left: 3em;
	bottom: 30%;
`;
const Floor = styled.div`
	position: absolute;
	left: 50%;
	bottom: .5em;
`;
const Wall = styled.div`
	position: absolute;
	right: 2em;
	top: 2.5em;
`;
const Cupboard = styled.div`
	position: absolute;
	right: 30%;
	top: 25%;
`;
const KitchenWorkTop = styled.div`
	position: absolute;
	right: 45%;
	top: 55%;
`;

const Kitchen = () => (
	<>
		<Stool>
			<Tag />
		</Stool>
        <Floor>
            <Tag />
        </Floor>
        <Wall>
            <Tag />
        </Wall>
        <Cupboard>
            <Tag />
        </Cupboard>
        <KitchenWorkTop>
            <Tag />
        </KitchenWorkTop>
	</>
);

export default Kitchen;

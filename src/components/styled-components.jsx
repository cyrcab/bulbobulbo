import styled from "styled-components";

const Image = styled.img`
	@media (max-width: 768px) {
		margin-top: 10px;
		border-radius: 10px;
	}
`;
const ImgContainer = styled.div`
	position: relative;
`;
export default Image;

export { ImgContainer };

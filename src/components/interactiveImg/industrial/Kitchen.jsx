import Image, { ImgContainer } from "../../styled-components";
import Cuisine from "../../../ressources/cuisine-industrielle.jpeg";
import KitchenTags from "../../Tags/Kitchen";

const Kitchen = () => (
	<>
		<ImgContainer>
			<Image src={Cuisine} width='90%' />
			<KitchenTags />
		</ImgContainer>
	</>
);

export default Kitchen;

import SalleDeBain from "../../../ressources/salle-de-bain-industrielle.jpg";
import Image, { ImgContainer } from "../../styled-components";
import BathroomTags from '../../Tags/Bathroom'

const Bathroom = () => (
	<ImgContainer>
		<Image src={SalleDeBain} width='90%' />;
        <BathroomTags />
	</ImgContainer>
);

export default Bathroom;

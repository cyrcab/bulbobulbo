import Salon from "../../../ressources/style-industriel.jpg";
import Image, { ImgContainer} from "../../styled-components";
import LivingRoomTags from '../../Tags/LivingRoom'

const LivingRoom = () => (
	<ImgContainer>
		<Image src={Salon} width='90%' />;
		<LivingRoomTags />
	</ImgContainer>
);

export default LivingRoom;

import { useContext } from "react";
import IndustrialContext from "../../context/IndustrialContext";

const DivInfos = () => {
	const { isClicked } = useContext(IndustrialContext);
	const { carpet, clock, light, shelf, table } = isClicked;

	if (carpet) {
		return <h1>carpet</h1>;
	} else if (clock) {
        return <h1>clock</h1>
    } else if (light) {
        return <h1>light</h1>
    } else if (shelf) {
        return <h1>shelf</h1>
    } else if (table) {
        return <h1>table</h1>
    } else {
        return <div className="nothing"></div>
    }
};

export default DivInfos;

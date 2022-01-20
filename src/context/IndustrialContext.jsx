import { createContext, useState } from "react";

const IndustrialContext = createContext();

export default IndustrialContext;

export const IndustrialContextProvider = ({ children }) => {
	const [isClicked, setIsClicked] = useState({
		shelf: false,
		carpet: false,
		clock: false,
		light: false,
		table: false,
	});

	return (
		<IndustrialContext.Provider value={{ isClicked, setIsClicked }}>
			{children}
		</IndustrialContext.Provider>
	);
};

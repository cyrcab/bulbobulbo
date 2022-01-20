import { useContext } from "react";
import IndustrialContext from "../../context/IndustrialContext";
import Carpet from "./Carpet";
import Shelf from "./Shelf";
import Table from "./Table";
import Light from "./Light";
import Clock from "./Clock";

const InfosContainer = () => {
  const { isClicked } = useContext(IndustrialContext);
  const { carpet, clock, light, shelf, table } = isClicked;

  if (carpet) {
    return <Carpet />;
  } else if (clock) {
    return <Clock />;
  } else if (light) {
    return <Light />;
  } else if (shelf) {
    return <Shelf />;
  } else if (table) {
    return <Table />;
  } else {
    return <div></div>;
  }
};

export default InfosContainer;

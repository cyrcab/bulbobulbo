import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Inspiration from "./pages/Inspiration";
import ScandinavianStyle from "./pages/ScandinavianStyle";
import IndustrialStyle from "./pages/IndustrialStyle";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/scandinavianStyle" element={<ScandinavianStyle />} />
        <Route path="/industrialStyle" element={<IndustrialStyle />} />
      </Routes>
    </>
  );
}

export default App;

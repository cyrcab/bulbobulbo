import { Routes, Route } from 'react-router-dom';
import './App.css';
import PageStyle from './components/PageStyle';
import PageRoomScandinave from './components/PageRoomScandinave';
import PageRoomIndustrial from './components/PageRoomIndustrial';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes> 
            <Route exact path='/' element={<PageStyle />} />
            <Route path='/scandinavianRoom' element={<PageRoomScandinave />} />
            <Route path='/industrialRoom' element={<PageRoomIndustrial />} />
      </Routes>
    </div>
  )
};

export default App;

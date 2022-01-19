import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
// import PageStyle from './components/PageStyle';
// import PageRoomScandinave from './components/PageRoomScandinave';
import PageRoomIndustrial from './components/PageRoomIndustrial';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <PageStyle /> */}
      {/* <PageRoomScandinave /> */}
      < PageRoomIndustrial />
    </div>
  )
}

export default App

import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import PageStyle from './components/PageStyle';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <PageStyle />
    </div>
  )
}

export default App

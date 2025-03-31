
import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar';

function App() {

  const [darki , setDarki] = useState(false);

  return (
    <>
      
      <Navbar darki={darki} setDarki={setDarki} />
    </>
  )
}

export default App

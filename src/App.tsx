
import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';

function App() {

  const [darki , setDarki] = useState(false);

  return (
    <>
      
      <Navbar darki={darki} setDarki={setDarki} />
      <HeroSection darki={darki} />
    </>
  )
}

export default App

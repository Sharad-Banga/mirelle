
import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Collections } from './components/Collections';
import { Prestige } from './components/Prestige';

function App() {

  const [darki , setDarki] = useState(false);

  return (
    <>
      
      <Navbar darki={darki} setDarki={setDarki} />
      <HeroSection darki={darki} />
      <Collections darki={darki} />
      <Prestige darki={darki} />
    </>
  )
}

export default App


import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Collections } from './components/Collections';

function App() {

  const [darki , setDarki] = useState(false);

  return (
    <>
      
      <Navbar darki={darki} setDarki={setDarki} />
      <HeroSection darki={darki} />
      <Collections darki={darki} />
    </>
  )
}

export default App

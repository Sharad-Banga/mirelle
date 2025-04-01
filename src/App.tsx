
import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Collections } from './components/Collections';
import { Prestige } from './components/Prestige';
import { Fav } from './components/Fav';

function App() {

  const [darki , setDarki] = useState(true);

  return (
    <>
      
      <Navbar darki={darki} setDarki={setDarki} />
      <HeroSection darki={darki} />
      <Collections darki={darki} />
      <Prestige darki={darki} />

      <Fav darki={darki}/>
    </>
  )
}

export default App

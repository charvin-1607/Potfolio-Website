import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'

function App() {


  return (
    <>
     <Navbar />
     <Hero />
     <About />
     <Skills />
     <Projects />
     {/* <Resume /> */}
    </>
  )
}

export default App

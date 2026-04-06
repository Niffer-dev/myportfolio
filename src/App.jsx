import React from 'react'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'
import About from './component/About'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Contact from './component/Contact'
import Footer from './component/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <HeroSection />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
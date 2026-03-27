import React from 'react'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'
import About from './component/About'
import Skills from './component/Skills'
import Contact from './component/Contact'
import Footer from './component/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <HeroSection />
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
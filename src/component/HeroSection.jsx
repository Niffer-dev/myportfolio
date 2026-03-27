import React from 'react'
import heroImg from '../assets/images/profilepicture.jpeg'
import Button from '../component/Button'

const HeroSection = () => {
  return (
    <div className='hero relative bg-linear-to-tl from-[#0B0112] to-[#0B0112] flex items-center justify-center lg:justify-start px-6 sm:px-10 lg:px-20 pt-28 min-h-screen bg-cover bg-center' style={{backgroundImage: `url(${heroImg})`}}>
        <div className="absolute inset-0 bg-black/60 backdrop:dark z-0"></div>
        <div className='max-w-lg text-white relative z-10'>
            <h2 className='text-4xl sm:text-6xl lg:text-4xl font-bold text-gray-50'>Hi, I'm Jennifer</h2>
            <h2 className='text-xl sm:text-4xl lg:text-4xl font-semibold lg:py-7 py-5 bg-linear-to-l from-[#DD548C] to-[#A123E6] bg-clip-text text-transparent'>A Full stack developer</h2>
            <p className='text-gray-300 lg:text-2xl sm:text-4xl'>Crafting modern, responsive, and user-friendly websites, web applications with passion and precision.</p>
            <Button text={"Contact Me"} />
        </div>
    </div>
  )
}

export default HeroSection
import React from 'react'
import aboutImg from '../assets/images/ngini jennifer.jpeg'
import AboutBtn from './AboutBtn'

const About = () => {
  return (
    <div className=' flex flex-col items-justify-between bg-linear-to-tl from-[#0B0112] to-[#0B0112] px-3 sm:px-10 lg:px-24 pt-20 pb-20'>
        <h2 className='text-gray-300 text-center text-3xl sm:text-4xl lg:text-5xl pb-12 lg:pb-20'>About Me</h2>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-20'>
            <div className='relative hidden lg:block'>
                <div className='absolute inset-4 rounded-full bg-linear-to-tr from-[#DD548C] to-[#FF77AA] blur-xl opacity-60"'></div>
                <img src={aboutImg} alt="About Jennifer" className='relative rounded-full w-[320px] lg:w-[380px] aspect-square object-cover z-10'/>
            </div>
            <div className='w-full max-w-xl mx-auto text-white text-center lg:text-left'>
                <h2 className='bg-linear-to-l from-[#DD548C] to-[#A123E6] bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left font-semibold pb-6'>I'm Jennifer Chinazom Ngini</h2>
                <p className='text-gray-300 text-base sm:text-lg pb-3'>Software Developer student at New Horizon Academy and freelance web/mobile developer in Nigeria. </p>
                <p className='text-gray-300 text-base sm:text-lg pb-2.5'>I create tailored solutions using, Javascript, React, Node, Wordpress and many more for startups and businesses</p>
                <AboutBtn icon={<i class="ri-macbook-line"></i>} text={"Website Development"}/>
                <AboutBtn icon={<i class="ri-android-line"></i>} text={"Automation"}/>
                <AboutBtn icon={<i class="ri-bug-line"></i>} text={"Problem Solving"}/>
            </div>
        </div>
    </div>
  )
}

export default About
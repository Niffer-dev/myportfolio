import React from 'react'
import flag from '../assets/images/nigeria_flag.png'

const Footer = () => {
  return (
    <footer className='bg-linear-to-tl from-[#0B0112] to-[#0B0112] flex justify-between px-16 py-3 border border-t-gray-800 items-center'>
        <div className='flex flex-col text-[13px]'>
            <h2 className='text-white font-bold'>Jennifer Chinazom Ngini</h2>
            <p className='text-gray-400 flex items-center gap-1.5'> <img src={flag} alt="Nigeria flag" className="w-3 h-2"/> Based in Nigeria</p>
            <p className='text-white pt-3'>&copy; {new Date().getFullYear()} Niffer. All rights reserved.</p>
        </div>

        <div className='text-gray-400 flex flex-col gap-2 text-[13px]'>
            <p className=''>Portfolio built with React Js and Tailwind</p>
            <div className='text-gray-400 flex gap-3 text-[16px] ml-auto'>
                <i class="ri-github-fill"></i>
                <i class="ri-linkedin-box-fill"></i>
                <i class="ri-mail-fill"></i>
            </div>
        </div>
    </footer>
  )
}

export default Footer
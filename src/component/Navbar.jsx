import React, { useState } from 'react'

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const showMenu = () => {
    setMenu (prev => !prev);
  }

  // const showMenu = () => {
  //   setMenu(true)

  return (
    <nav className='fixed z-50 w-full top-0 left-0 bg-linear-to-b from-[#411332] to-[#0B0112] flex items-center justify-between py-4 px-6 sm:px-10 lg:px-20'>
      <h2 className='bg-linear-to-l from-[#DD548C] to-[#A123E6] bg-clip-text text-transparent font-bold text-2xl lg:text-3xl '>Niffer&lt;/&gt; </h2>
      <div className='flex items-center gap-10 '>
        <ul className=' hidden lg:flex text-gray-300 font-semibold text-sm gap-6'>
            <li className="hover:text-white cursor-pointer">Home</li> 
            <li className="hover:text-white cursor-pointer">About</li> 
            <li className="hover:text-white cursor-pointer">Skills</li> 
            <li className="hover:text-white cursor-pointer">Projects</li> 
            <li className="hover:text-white cursor-pointer">Contacts</li>
        </ul>
        <button onClick={showMenu} className='lg:hidden block text-3xl lg:text-2xl text-amber-50'><i class="ri-menu-line"></i></button>
      </div>

      {menu && (
        <ul className="absolute top-full flex flex-col items-center gap-6 bg-amber-50 py-6 w-sm text-2xl font-semibold text-black lg:hidden shadow-lg transition-all duration-300">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
import React from 'react'

const AboutBtn = ({icon, text}) => {
  return (
    <div className='p-0.5 mt-4 rounded-xl bg-linear-to-r from-[#411332] via-[#6d1d54] to-[#411332] lg:w-full sm:mx-auto sm:w-auto'>
        <div className='flex items-center gap-5 bg-[#190429] rounded-xl p-3 text-white font-semibold justify-center lg:justify-start'>
            <i class='bg-linear-to-l from-[#A123E6] to-[#DD548C] bg-clip-text text-transparent text-xl'>{icon}</i>
            <p className='bg-linear-to-l from-[#DD548C] to-[#A123E6] bg-clip-text text-transparent text-md'>{text}</p>
        </div>
    </div>
  )
}

export default AboutBtn
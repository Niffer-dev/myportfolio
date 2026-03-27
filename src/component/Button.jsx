import React from 'react'

const Button = ({text}) => {
  return (
    <button className='mt-6 bg-linear-to-l from-[#A123E6] to-[#DD548C] px-4 py-2 rounded-lg'>
        <p>{text}</p>
    </button>
  )
}

export default Button
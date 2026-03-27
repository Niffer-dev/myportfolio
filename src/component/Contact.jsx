import React from 'react'
import contactBG from '../assets/images/dark-vibrant.jpg'
import Button from '../component/Button'

const Contact = () => {
  return (
    <div className='bg-linear-to-tl from-[#0B0112] to-[#0B0112] py-5'>
        <div className='flex gap-24 items-center w-6xl mx-auto my-10 px-8 py-16 bg-cover bg-center bg-linear-to-tl from-[#0B0112] to-[#0B0112]  border border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.6)] rounded-lg' style={{backgroundImage: `url(${contactBG})`}}>
            <div className='w-2xl '>
                <h2 className='text-[#BA8DF2] font-extrabold text-4xl leading-none'>Bringing your ideas to life. Let's turn your vision into reality</h2>
                <p className='text-white text-md pt-2'>Have a project in mind or just want to chat? Let's connect!</p>
            </div>

            <form className=' bg-gray-950 p-6 flex flex-col gap-7 w-2xl border border-gray-800 rounded-lg'>
                <div>
                    <label htmlFor="" className='text-white'>Name</label> <br />
                    <input type="text" placeholder='Your name' className='text-gray-400 border border-gray-800 rounded-lg p-2 w-full' />
                </div>

                <div>
                    <label htmlFor="" className='text-white'>Email</label> <br />
                    <input type="email" placeholder='contact@example.com' className='text-gray-400 border border-gray-800 rounded-lg p-2 w-full'/>
                </div>

                <div>
                    <label htmlFor="message" className='text-white'>Message</label> <br />
                    <textarea type="text" placeholder='Type your message here...' className='text-gray-400 border border-gray-800 rounded-lg p-2 w-full'/>
                </div>
                <button className='border border-gray-800 text-gray-100 w-16 p-1 ml-auto'>Send</button>
            </form>
        </div>
    </div>
  
  )
}

export default Contact
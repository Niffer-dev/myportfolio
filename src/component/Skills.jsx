import React from 'react'

const Skills = () => {
  return (
    <div className='bg-[#0b0112f1] text-white px-6 sm:px-10 lg:px-32 py-10'>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-center lg:text-left'>Building Digital Experience</h2>
        <p className='text-gray-400 py-1 text-center lg:text-left'>I specialize in creating stunning user interfaces and developing high quality website that stand out.</p>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10 mx-auto'>
            <div className=' border border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.6)] rounded-lg p-5'>
                <div className='flex items-center gap-2'>
                    <i class="ri-terminal-window-line text-[#BA8DF2] text-2xl"></i>
                    <h2 className='font-bold text-lg'>What can i do</h2>
                </div>
                <p className='text-gray-400 font-semibold text-sm py-2'>I can help develop solutions that could help you grow your business</p>
                <ul className='list-disc py-5 space-y-1.5 pl-4 text-sm'>
                    <li>Frontend web development</li>
                    <li>Backend web development</li>
                    <li>Automation</li>
                    <li>API Integration</li>
                    <li>Social media management</li>
                </ul>
            </div>

            <div className='border border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.6)] rounded-lg p-5'>
                <div className='flex items-center gap-2'>
                    <i class="ri-stack-line text-[#BA8DF2] text-2xl"></i>
                    <h2 className='font-bold text-lg'>Tools I Use</h2>
                </div>
                <p className='text-gray-400 font-semibold text-sm py-2'>I use the latest tools and technologies to build functional and scalable products:</p>
                <ul className='list-disc py-5 pl-4 space-y-1 text-sm'>
                    <li className=''>Frontend:</li>
                    <p className='text-gray-400 text-sm'>HTML, Tailwind CSS, React</p>

                    <li className=''>Backend:</li>
                    <p className='text-gray-400 text-sm'>Node.js, MongoDB, Postman</p>

                    <li className=''>Automation:</li>
                    <p className='text-gray-400 text-sm'>n8n, Google docs, Claude, Grok, GPT-5</p>

                    <li className=''>Social media management:</li>
                    <p className='text-gray-400 text-sm'>Meta business suite, collect, Canva, chatGPT</p>
                </ul>
            </div>

            <div className='border border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.6)] rounded-lg p-5'>
                <div className='flex items-center gap-2'>
                    <i class="ri-ai-agent-line text-[#BA8DF2] text-2xl"></i>
                    <h2 className='font-bold text-lg'>Automation</h2>
                </div>
                <p className='text-gray-400 font-semibold text-sm py-2'>I build intelligent automation systems that streamline workflows, reduce manual work, and improve productivity.</p>
                <ul className='list-disc py-5 pl-4 space-y-1.5 text-sm'>
                    <li>Workflow automation</li>
                    <li>Task and process optimization</li>
                    <li>AI-powered productivity systems</li>
                    <li>Cross-platform integrations</li>
                    <li>Automated data processing</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Skills
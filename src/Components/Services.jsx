import React from 'react'

const Services = () => {
  return (
   <div className='w-full mb-16 lg:px-16'>
    <div className='w-full flex justify-center items-center flex-col'>
         <div className=' w-full items-center justify-center flex mb-2'>
        <h1 className=' md:text-3xl text-2xl font-bold text-[#203c70]'>OUR SERVICES</h1>
        </div>
        <hr className='border-t-[3px] border-[#FBDD07] w-[10%] mb-12' />
    </div>
      
      
      <div className='w-full flex gap-7 justify-center flex-wrap'>
    
      <div className='bg-gray-50 ring-1 ring-gray-300 hover:ring-gray-400 p-4 w-[85%] md:w-1/3 lg:w-1/5 rounded-md shadow-lg'>
           <img className='w-16 h-16 mb-2' src="/manu.png" alt="" />
           <h1 className='text-[#203c70] text-2xl font-bold mb-1'>Design & Manufacturing</h1>
           <p className='text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Architecto aspernatur a sint sit odio harum incidunt nemo ipsa rem eveniet.</p>
       </div>

        <div className='bg-gray-50 ring-1 ring-gray-300 hover:ring-gray-400 p-4 w-[85%] md:w-1/3 lg:w-1/5 rounded-md shadow-lg'>
           <img className='w-16 h-16 mb-2' src="/Skill.png" alt="" />
           <h1 className='text-[#203c70] text-2xl font-bold mb-1'>Skilling</h1>
           <p  className='text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Architecto aspernatur a sint sit odio harum incidunt nemo ipsa rem eveniet.</p>
       </div>

       <div className='bg-gray-50 ring-1 ring-gray-300 hover:ring-gray-400 p-4 w-[85%] md:w-1/3 lg:w-1/5 rounded-md shadow-lg'>
           <img className='w-16 h-16 mb-2' src="/control.png" alt="" />
           <h1 className='text-[#203c70] text-2xl font-bold mb-1'>Testing</h1>
           <p className='text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Architecto aspernatur a sint sit odio harum incidunt nemo ipsa rem eveniet.</p>
       </div>

       <div className='bg-gray-50 ring-1 ring-gray-300 hover:ring-gray-400 p-4 w-[85%] md:w-1/3 lg:w-1/5 rounded-md shadow-lg'>
           <img className='w-16 h-16 mb-2' src="/prototype.png" alt="" />
           <h1 className='text-[#203c70] text-2xl font-bold mb-1'>Prototyping</h1>
           <p className='text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Architecto aspernatur a sint sit odio harum incidunt nemo ipsa rem eveniet.</p>
       </div>
    
    
     </div>

    </div>
  )
}

export default Services
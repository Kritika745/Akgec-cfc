import React from 'react';

const Services = () => {
  return (
    <div className='w-full pt-16 lg:px-16' id='services'>
      <div className='w-full flex justify-center items-center flex-col'>
        <div className='w-full items-center justify-center flex mb-2'>
          <h1 className='md:text-3xl text-2xl font-bold text-[#203c70]'>SERVICES</h1>
        </div>
        <hr className='border-t-[3px] border-[#FBDD07] sm:w-[10%] w-[15%] mb-12' />
      </div>

      <div className='w-full flex gap-7 justify-center flex-wrap'>
        <div className='bg-gray-50 ring-1 ring-gray-300 hover:ring-gray-400 p-4 w-[85%] md:w-1/3 lg:w-1/5 rounded-md shadow-lg flex flex-col'>
          <img className='w-16 h-16 mb-2' src="/manu.png" alt="Manufacturing" />
          <h1 className='text-[#203c70] text-2xl font-bold mb-1'>Manufacturing</h1>
          <p className='text-base mb-4'>
            Design & Manufacturing division specializes in creating high-quality, we provide customized solutions for industrial applications.
          </p>
          
          <div className='mt-auto'>
            <button
              type="button"
              className="rounded-2xl bg-[#FBDD07] px-3 py-2 text-sm font-semibold shadow-sm hover:bg-[#203c70] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Read More
            </button>
          </div>
        </div>

        <div className='bg-gray-50 ring-1 ring-gray-300 hover:ring-gray-400 p-4 w-[85%] md:w-1/3 lg:w-1/5 rounded-md shadow-lg flex flex-col'>
          <img className='w-16 h-16 mb-2' src="/prototype.png" alt="Prototyping" />
          <h1 className='text-[#203c70] text-2xl font-bold mb-1'>Prototyping</h1>
          <p className='text-base mb-4'>
            Prototyping services uses latest technologies and methodologies that offer a rapid and efficient way to bring the industrial concepts to life.
          </p>
          
          <div className='mt-auto'>
            <button
              type="button"
              className="rounded-2xl bg-[#FBDD07] px-3 py-2 text-sm font-semibold shadow-sm hover:bg-[#203c70] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Read More
            </button>
          </div>
        </div>

        <div className='bg-gray-50 ring-1 ring-gray-300 hover:ring-gray-400 p-4 w-[85%] md:w-1/3 lg:w-1/5 rounded-md shadow-lg flex flex-col'>
          <img className='w-16 h-16 mb-2' src="/control.png" alt="Testing" />
          <h1 className='text-[#203c70] text-2xl font-bold mb-1'>Testing</h1>
          <p className='text-base mb-4'>
            Testing services are designed to ensure the highest standards of quality and reliability for industrial products and processes.
          </p>
          
          <div className='mt-auto'>
            <button
              type="button"
              className="rounded-2xl bg-[#FBDD07] px-3 py-2 text-sm font-semibold shadow-sm hover:bg-[#203c70] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Read More
            </button>
          </div>
        </div>
        
        <div className='bg-gray-50 ring-1 ring-gray-300 hover:ring-gray-400 p-4 w-[85%] md:w-1/3 lg:w-1/5 rounded-md shadow-lg flex flex-col'>
          <img className='w-16 h-16 mb-2' src="/Skill.png" alt="Skilling" />
          <h1 className='text-[#203c70] text-2xl font-bold mb-1'>Skilling</h1>
          <p className='text-base mb-4'>
            Skilling program empowers individuals with the training and development opportunities designed to enhance technical skills and operational efficiency.
          </p>
          
          <div className='mt-auto'>
            <button
              type="button"
              className="rounded-2xl bg-[#FBDD07] px-3 py-2 text-sm font-semibold shadow-sm hover:bg-[#203c70] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

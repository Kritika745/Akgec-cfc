import React from 'react'
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import  {advtoolroom,rnd,material} from '../constants/index'
import Infra from '../Components/infrastructure';

const COE = () => {
  return (
    <>
    <div className='w-full items-center justify-center flex flex-col pt-16'>
    <div className=' w-full items-center justify-center flex mb-2'>
        <h1 className=' md:text-3xl text-2xl font-bold text-[#203c70]'>INFRASTRUCTURE</h1>
        
     </div>
     <hr className='border-t-[3px] border-[#FBDD07] sm:w-[10%] w-[15%] mb-16' />
     </div>

     <Infra  data={advtoolroom} id={"AdvToolRoom"}/>
     <Infra  data={rnd} id={"R&DLab"}/>
     <Infra  data={material} id={"Material"}/>

      {/* <div className='flex w-full justify-center items-center flex-wrap mb-16 gap-10 md:gap-24 px-8 md:px-16'>
        <div className='flex flex-col w-80 lg:w-auto'>
            <div className='flex mb-4'>
            <div className='bg-[#FBDD07] w-16 h-16 flex items-center text-white text-3xl font-semibold justify-center rounded-lg'>
                1.
                </div>
            <div className='p-2'> 
                <p className='text-gray-400'>Manufacturing</p>
                <h2 className='font-semibold text-lg'>Modern Tool Room</h2>
            </div>
            </div>
            <div className='flex pl-4'>
            <ChevronRight />
            <Link to='/centre/AdvToolRoom'><p className={`text-black md:text-lg font-semibold`}>Read More</p></Link>           
            </div>
         </div>

         <div className='flex flex-col w-80 lg:w-auto'>
            <div className='flex mb-4'>
            <div className='bg-[#FBDD07] w-16 h-16 flex items-center text-white text-3xl font-semibold justify-center rounded-lg'>
                2.
                </div>
            <div className='p-2'> 
                <p className='text-gray-400'>Additive Manufacturing</p>
                <h2 className='font-semibold text-lg'>Research & Development Lab</h2>
            </div>
            </div>
            <div className='flex pl-4'>
            <ChevronRight />
            <Link to='/centre/R&DLab'><p className={`text-black md:text-lg font-semibold`}>Read More</p></Link>           
            </div>
         </div>

         <div className='flex flex-col w-80 lg:w-auto'>
            <div className='flex mb-4'>
            <div className='bg-[#FBDD07] w-16 h-16 flex items-center text-white text-3xl font-semibold justify-center rounded-lg'>
                3.
                </div>
            <div className='p-2'> 
                <p className='text-gray-400'>Material Testing</p>
                <h2 className='font-semibold text-lg'>Material Testing Lab</h2>
            </div>
            </div>
            <div className='flex pl-4'>
            <ChevronRight />
            <Link to='/centre/Material'><p className={`text-black md:text-lg font-semibold`}>Read More</p></Link>           
            </div>
         </div>

         <div className='flex flex-col w-80 lg:w-auto'>
            <div className='flex mb-4'>
            <div className='bg-[#FBDD07] w-16 h-16 flex items-center text-white text-3xl font-semibold justify-center rounded-lg'>
                4.
                </div>
            <div className='p-2'> 
                <p className='text-gray-400'>Industry 4.0</p>
                <h2 className='font-semibold text-lg'>IIOT</h2>
            </div>
            </div>
            <div className='flex pl-4 '>
            <ChevronRight />
            <Link to='/centre/iiot'><p className={`text-black md:text-lg font-semibold`}>Read More</p></Link>           
            </div>
         </div>
    </div> */}
    </>
  )
}

export default COE
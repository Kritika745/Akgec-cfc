import React from 'react'

import { useParams } from 'react-router-dom'

import {advancetoolroom,rndlab,materialtesting} from '../constants/machine'



const Machine = () => {
  let { id, subId } = useParams();
  const getroom = (id) => {
    if (id === 'AdvToolRoom') {
      return advancetoolroom
      
    } else if (id === 'R&DLab') {
      return  rndlab
    } else if (id === 'Material') {
      return  materialtesting
    }  else {
      return []
    }
  }

  const roomData = getroom(id);
  console.log(roomData);
  const machine = roomData.find((item) => item.id === parseInt(subId));
  console.log(machine)
  return (
    <div className='w-full pt-16 sm:pt-20 bg-gray-900 text-white pb-16'>
      <div className='flex sm:flex-row flex-col'>

        <div className='sm:w-[70%] w-full'>
             <img src={machine.image1} alt="" />
        </div>
        <div className='sm:w-[70%] w-full px-6 sm:px-10 md:px-20 lg:px-6 lg:pr-9 flex flex-col items-start justify-center '>
            <div className='flex flex-col w-full justify-center items-center '>
            <h1 className='text-xl mt-4 md:text-3xl lg:text-4xl font-bold mb-2'>{machine.title}</h1>
            <hr className="w-[40%] border-t-[3px] border-yellow-300 mb-10" />
            </div>
            {Object.entries(machine.description1).map(([key, value], index) => (
                    <div key={index}>
                    <p className='text-justify'>
                      <strong style={{ color: '#fff5a6' }}>{key}:</strong> {value}
                    </p>
                    <br />
                  </div>
                ))} 
                   {machine.description2 && <p className='text-base sm:text-md lg:text-lg text-justify'>
                    {machine.description2}</p> }  
        </div>
      </div>

      <div className='flex sm:flex-row flex-col w-full'>
      <div className='flex sm:w-[60%] w-full flex-col px-6 py-4 order-2 sm:order-1'>
            <div className=' items-center pt-6 hidden sm:flex'>
              <p className='border-[#FBDD07] border-[3px] inline-block rounded-lg px-4 py-2 text-lg font-bold'>SPECIFICATIONS</p>
              <hr className="w-[80%] border-t-[3px] border-yellow-300 " />
            </div>
            <div className='text-lgtext-base sm:text-md lg:text-lg sm:pl-8 pt-8 text-justify'>
                {Object.entries(machine.specifications).map(([key, value], index) => (
                    <p key={index}>
                        <strong style={{ color: '#fff5a6' }}>{key}:</strong> {value}
                    </p>
                ))}
            </div>
        </div>

      <div className='sm:w-[40%] w-full order-1  sm:order-2'>
      <div className=' items-center pt-6 flex sm:hidden'>
              <p className='border-[#FBDD07] border-[3px] inline-block rounded-lg px-4 py-2 text-lg font-bold'>SPECIFICATIONS</p>
              <hr className="w-[80%] border-t-[3px] border-yellow-300 " />
            </div>
       <img src={machine.image2} alt="" />
      </div>
      </div>

      <div>
      <div className='flex items-center pt-6 mb-8'>
              <p className='border-[#FBDD07] border-[3px] inline-block rounded-lg px-4 py-2 text-lg font-bold'>GALLERY</p>
              <hr className="w-[80%] border-t-[3px] border-yellow-300 " />
            </div>

      <div className='items-center justify-center flex'>
      <img src={machine.image} alt="" />  
        </div>    

      </div>



      
    </div>
  )
}

export default Machine

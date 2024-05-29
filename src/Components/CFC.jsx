import React from 'react'
import cfc from '../assets/cfc.png';

const CFC = () => {
  return (
    <div className='bg-[#3C3A3A33] md:m-4 sm:m-2 p-7'>
    <h1 className='text-4xl text-center mb-7 font-normal '>Common Facility Centre</h1>
    <div className="md:flex   ">
      <div className="md:w-[40%] flex items-center justify-center mr-4 m-6">
        <img src={cfc} alt="ODOP" className="sm:h-32 md:h-36 md:w-full lg:w-[60%] xl:h-42 w-[60%] rounded-md " />
      </div>
      <div className="md:w-[50%] lg:text-base text-sm leading-relaxed">
        <p className="mb-4">
        Common Facility Centre (CFC) is established under “One District One Product (ODOP) CFC Scheme” of Government of Uttar Pradesh. One of the main objective of this initiative is to enhance synergy between Industry & Academia and to support Medium and Small Industries (MSMEs) of the region by providing R&D Support for new product development and also to train their employees and young students to learn new and upcoming technologies for their career advancements.
        CFC has high end engineering product development facilities for Local Industries including Advance Tool Room with Industry 4.0 interface, Material Testing Lab and Research & Development Lab to motivate the existing industries and new entrants to come forward and upgrade their technological skills.
        </p>
        
      </div>
    </div>
    </div>
  )
}

export default CFC

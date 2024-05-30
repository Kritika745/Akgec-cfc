import React from 'react'

const CFC = () => {
  return (
    
    <div className='bg-[url("/CFC3.png")] bg-no-repeat bg-contain '>
    <div className="py-16 ">
      <div className="flex gap-2 w-full justify-center mb-2 ">
        <h1 className="md:text-3xl text-2xl  text-center font-bold text-[#2F80C2] ">
          COMMON
        </h1>
        <h1 className="md:text-3xl text-2xl  text-center font-bold text-[#FBDD07] ">
          FACILITY
        </h1>
        <h1 className="md:text-3xl text-2xl  text-center font-bold text-[#28277d] ">
          CENTRE
        </h1>
      </div>

      <div className="flex w-full items-center justify-center mb-8">
        <hr className="w-[10%] border-t-[3px] border-yellow-300" />
      </div>

      <div className="">
        <div className="   md:text-lg text-base leading-relaxed px-10 sm:px-16 md:px-24 text-justify">
          <p className="mb-2   ">
            Common Facility Centre (CFC) is established under “One District One
            Product (ODOP) CFC Scheme” of Government of Uttar Pradesh. One of
            the main objective of this initiative is to enhance synergy between
            Industry & Academia and to support Medium and Small Industries
            (MSMEs) of the region by providing R&D Support for new product
            development and also to train their employees and young students to
            learn new and upcoming technologies for their career advancements.
          </p>
          <p className='mb-2'>The foundation stone for the CFC was laid on 23rd June 2021 by Hon’ble Chief Minister Yogi Adityanath Ji in the presence of Hon’ble 
            Minister Shri Atul Garg, Hon’ble District Magistrate Ghaziabad and other eminent officials of UP Government.</p>
          <p className="mb-4 ">
            CFC has high end engineering product development facilities for
            Local Industries including Advance Tool Room with Industry 4.0
            interface, Material Testing Lab and Research & Development Lab to
            motivate the existing industries and new entrants to come forward
            and upgrade their technological skills.
          </p>
        </div>
      </div>
    </div>
    </div>

  );
}

export default CFC

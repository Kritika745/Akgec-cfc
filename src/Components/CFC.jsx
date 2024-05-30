import React from 'react'
import cfc from '../assets/cfc.png';
import odop from '../assets/image.png';

const CFC = () => {
  return (
    <div className="py-10 ">
      <div className="flex gap-2 w-full justify-center ">
        <h1 className="md:text-3xl text-2xl  text-center font-bold text-[#2F80C2] ">
          COMMON
        </h1>
        <h1 className="md:text-3xl text-2xl  text-center font-bold text-[#e6e652] ">
          FACILITY
        </h1>
        <h1 className="md:text-3xl text-2xl  text-center font-bold text-[#28277d] ">
          CENTRE
        </h1>
      </div>

      <div className="flex w-full items-center justify-center mb-8">
        {/* <hr className='w-[9%] border-t-2 border-yellow-300' /> */}
        {/* <p className='px-4'>UTTAR PRADESH</p> */}
        <hr className="w-[12%] ml-6 border-t-2 border-yellow-200" />
      </div>

      <div className="">
        <div className="sm:hidden flex items-center justify-center mr-4 m-6">
          <img
            src={cfc}
            alt="cfc"
            className="md:h-36 md:w-full lg:w-[60%] xl:h-42 w-[70%] rounded-md "
          />
        </div>
        <div style={{
    backgroundImage: "url('/cfc.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: '17%',
    backgroundPosition: 'center',
  }} className=" bg-no-repeat bg-center text-gray-900  md:text-lg text-base leading-relaxed px-10 sm:px-16 md:px-24 text-justify">
          <p className="mb-2 text-gray-900  ">
            Common Facility Centre (CFC) is established under “One District One
            Product (ODOP) CFC Scheme” of Government of Uttar Pradesh. One of
            the main objective of this initiative is to enhance synergy between
            Industry & Academia and to support Medium and Small Industries
            (MSMEs) of the region by providing R&D Support for new product
            development and also to train their employees and young students to
            learn new and upcoming technologies for their career advancements.
          </p>
          <p className="mb-4 text-black">
            CFC has high end engineering product development facilities for
            Local Industries including Advance Tool Room with Industry 4.0
            interface, Material Testing Lab and Research & Development Lab to
            motivate the existing industries and new entrants to come forward
            and upgrade their technological skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CFC

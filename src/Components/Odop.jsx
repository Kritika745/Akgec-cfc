import React from 'react';
import odop from '../assets/image.png';

const Odop = () => {
  return (
    <div className= 'pt-16 '>

      <div className='flex gap-1 sm:gap-2 w-full justify-center px-2 '>
      <h1 className='md:text-3xl sm:text-2xl text-xl  text-center font-bold text-[#99435A] '>ONE</h1>
      <h1 className='md:text-3xl sm:text-2xl text-xl  text-center font-bold text-[#029043] '>DISTRICT</h1>
      <h1 className='md:text-3xl sm:text-2xl text-xl  text-center font-bold text-[#2F80C2] '>ONE</h1>
      <h1 className='md:text-3xl sm:text-2xl text-xl  text-center font-bold text-[#E65290] '>PRODUCT</h1>
      </div>
      
      <div className='flex w-full items-center justify-center mb-10'>
        <hr className='w-[8%] border-t-2 border-gray-400' />
        <p className='sm:px-4 px-2 '>UTTAR PRADESH</p>
        <hr className='w-[8%] border-t-2 border-gray-400' />
      </div>

     
    <div className="">
      <div className="sm:hidden flex items-center justify-center m-6">
        <img src={odop} alt="ODOP" className=" w-[70%] rounded-md " />
      </div> 
      <div className=" sm:bg-[url('/logo2.png')] bg-no-repeat bg-center  md:text-lg text-base leading-relaxed px-8 sm:px-16 md:px-24 text-justify">
        <p className="mb-2 ">
          One District One Product (ODOP) scheme is an initiative of Government of Uttar Pradesh to encourage & promote MSMEs related to the indigenous and specialized product
           with distinct identity from a district which have potential of generating more employment and development.
          </p>
          <p className='mb-4'>
          District Ghaziabad is identified as a hub for manufacturing of General Engineering Products.
           Many of the manufacturers in the region are small and medium industries who needs modernization, 
           machinery and productivity enhancement support through CFC.
        </p>
        <p className="font-semibold mb-2">The major objectives of ODOP Scheme are:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>To provide employment to youth & artisans</li>
          <li>To improve product quality and skill development</li>
          <li>To take ODOP products to national and international markets</li>
          <li>To preserve and develop local crafts / skills and promote the art</li>
          <li>To add to incomes and local employment, thus preventing migration for jobs</li>
          <li>To connect production process with tourism</li>
        </ul>
      </div>

    </div>
    </div>
  );
}

export default Odop;


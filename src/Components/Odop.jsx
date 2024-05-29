

import React from 'react';
import odop from '../assets/image.png';

const Odop = () => {
  return (
    <div className='md:m-4 sm:m-2 p-7'>
     <h1 className='text-3xl text-center mb-7 font-normal '>ONE DISTRICT ONE PRODUCT</h1>
    <div className="md:flex bg-white ">
      <div className="md:w-[40%] flex items-center justify-center mr-4 m-6">
        <img src={odop} alt="ODOP" className="md:h-36 md:w-full lg:w-[60%] xl:h-42 w-[60%] rounded-md " />
      </div>
      <div className="md:w-[50%] lg:text-base text-sm leading-relaxed">
        <p className="mb-4">
          One District One Product (ODOP) scheme is an initiative of Government of Uttar Pradesh to encourage & promote MSMEs related to the indigenous and specialized product with distinct identity from a district which have potential of generating more employment and development.
          District Ghaziabad is identified as a hub for manufacturing of General Engineering Products. Many of the manufacturers in the region are small and medium industries who needs modernization, machinery and productivity enhancement support through CFC.
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


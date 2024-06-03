import React from 'react'
const jsonData = {
  "Ultimate Tensile Strength": "Maximum stress a material can withstand without breaking.",
  "Yield Stress": "Represents the upper limit to forces that can be applied without producing permanent deformation.",
  "Elongation %": "Numerical measure of the ductility of the material.",
  "Reduction of Area": "Measure of ductility obtained from the tensile test.",
  "Bend Strength Test": "Ability to resist deformation under load.",
  "Flattening Test": "Determines if the tube will fracture upon flattening.",
  "Flaring Test": "Measures expansion of the inside and outside diameter.",
  "Compression Test": "Behavior of materials when subjected to compressive loads.",
  "Shear Test": "Applies stress to experience a sliding failure along a plane parallel to the forces applied.",
  "Model": "UTES-HGFL-TS",
  "Make": "FIE (Fuel Instruments & Engineers Pvt. Ltd.)",
  "Vendor": "CANAN testing services",
  "Loading": "Servo Controlled, Hydraulic Grip, Front Loading",
  "Maximum capacity": "1000 kN",
  "Measuring range": "0-1000 kN",
  "Load resolution": "25 N",
  "Power": "5 HP"
};


const Machine = () => {
  return (
    <div className='w-full pt-16 sm:pt-20 bg-gray-900 text-white pb-16'>
      <div className='flex sm:flex-row flex-col'>

        <div className='sm:w-[30%] w-full'>
             <img src="https://ucarecdn.com/f3c874a3-70b7-44a7-a9ef-cd8460b9ef7d/-/crop/505x649/274,86/-/preview/3000x3000/+" className='' alt="" />
        </div>
        <div className='sm:w-[70%] w-full px-6 sm:px-10 md:px-20 lg:px-28 flex flex-col items-center justify-center '>
            <div className='flex flex-col w-full justify-center items-center '>
            <h1 className='text-xl md:text-3xl lg:text-4xl font-bold mb-2'> CNC Wire Cut EDM (E Merge S64)</h1>
            <hr className="w-[40%] border-t-[3px] border-yellow-300 mb-10" />
            </div>
                  <p className='text-base sm:text-md lg:text-lg text-justify'>
                    The Wire-Cut EDM eMerge S64 is a cutting-edge precision machining solution, designed for 
                    unmatched accuracy and exceptional surface finishes. Key parameters include a workpiece capacity 
                    of 800 x 600 x 300 mm, maximum cutting speed of 300 mm²/min, 
                    wire diameter range of 0.1 to 0.3 mm, and positioning accuracy of ± 0.002 mm.
                    With capabilities such as high precision cutting, excellent repeatability, and fine surface finishing, the eMerge S64
             is perfect for complex geometries and detailed work. It is ideal for applications in aerospace, medical devices, 
             tool and die making, electronic parts, and prototype development, ensuring efficient and reliable performance.</p>    
        </div>
      </div>

      <div className='flex sm:flex-row flex-col w-full'>
      <div className='flex sm:w-[60%] w-full flex-col px-6 py-4 order-2 sm:order-1'>
            <div className=' items-center pt-6 hidden sm:flex'>
              <p className='border-[#FBDD07] border-[3px] inline-block rounded-lg px-4 py-2 text-lg font-bold'>SPECIFICATIONS</p>
              <hr className="w-[80%] border-t-[3px] border-yellow-300 " />
            </div>
            <div className='text-lg pl-8 pt-8'>
                {Object.entries(jsonData).map(([key, value], index) => (
                    <p key={index}>
                        <strong style={{ color: '#fff5a6' }}>{key}:</strong> {value}
                    </p>
                ))}
            </div>
        </div>

      <div className='sm:w-[40%] w-full order-1 sm:order-2'>
      <div className=' items-center pt-6 flex sm:hidden'>
              <p className='border-[#FBDD07] border-[3px] inline-block rounded-lg px-4 py-2 text-lg font-bold'>SPECIFICATIONS</p>
              <hr className="w-[80%] border-t-[3px] border-yellow-300 " />
            </div>
       <img src="https://ucarecdn.com/0860b2a6-dc4c-417c-a79a-cc2b95b95872/-/crop/559x649/266,52/-/preview/3000x3000/" alt="" />
      </div>
      </div>

      <div>
      <div className='flex items-center pt-6 mb-8'>
              <p className='border-[#FBDD07] border-[3px] inline-block rounded-lg px-4 py-2 text-lg font-bold'>GALLERY</p>
              <hr className="w-[80%] border-t-[3px] border-yellow-300 " />
            </div>

      <img src="/adv/IMG_1786.JPG" alt="" />      

      </div>



      
    </div>
  )
}

export default Machine

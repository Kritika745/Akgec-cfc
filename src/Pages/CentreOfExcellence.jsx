import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../constants';
import Infra from '../Components/infrastructure';

const CentreOfExcellence = () => {

  const { id } = useParams();
  console.log(id);

  const advtoolroom = [
    {
      name: "CNC Wire Cut EDM (E Merge S64)",
      brief:"cutting of solid rod,  hollow pipe, in round and square cross section. ",
      description:
        "Focused to cut materials which are difficult to machine, such as Inconel, Hastelloy, Titanium, Stainless Steel, etc., as well as any mild steel, taking into account the needs of solidity and hardness for the cut of this kind of materials",
    },
    {
      name: "CNC Wire drill",
      brief:"Cutting of any type of profile on any metal and alloys. Manufacturing of Die, Fixtures, and gauges, Cutting tools with high precision.",
      description:
        "Wire electrical discharge machining is a non-contact subtractive manufacturing process that uses an electrically charged thin wire with a dielectric fluid to cut a metal part into different shapes. The process produces small chips and precise cut lines by melting or vaporizing the material rather than cutting it.",
    
    },
    {
      name: "CNC VMC",
      brief:"All types of Die and mould machining, Drilling, Shaping, Cutting, Tapping, Boring on any component",
      description:
        "VMC(vertical machining center)with the spindle axis perpendicular to the worktable. It can complete the processes of milling, boring, drilling, tapping and cutting threads. The VMC is having three-axis and two-linkage",
    },
    {
      name: "CNC HMC",
      brief:"Engine block, Cylinder, and housing of different component machining.",
      description:
        "HMC( horizontal machining center )with a horizontal spindle. It has an automatic indexing rotary and 3 to 5 motion coordinates. The machine is having three linear motion coordinates plus one rotary motion coordinate.",
    },
];
  
  return (
    <>
      <div
        className="bg-fixed bg-center bg-cover h-screen"
        style={{ backgroundImage: "url('/IMG_1607.JPG')" }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="bg-black bg-opacity-65 text-white p-10 h-[100%] w-[100%] rounded-lg shadow-md text-center">
            <div className="relative w-[100%] h-[100%] ">
              <div className="absolute bg-yellow-300 bg-opacity-35 h-32 bottom-44 w-[30%] left-0">
                <hr className="border-1" />
                <div className="flex flex-col items-center justify-center h-[100%] w-[100%] ">
                  <h1 className="text-4xl font-medium">Adv Tool Room</h1>
                  <div className="flex items-center justify-center gap-1">
                    <h2 className="text-md">Manufacturing</h2>
                    <hr className="transform rotate-90 border-yellow-300 w-4" />
                    <h2 className="text-md">Material Testing</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Infra  advtoolroom={advtoolroom}/>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Our Center</h1>
        <ul className="list-disc text-left text-black h-96 w-full">
          {data['Advance Tool Room'].map((item) =>{
              <div className='text-black h-96 w-full' key={item.name}>
                harsh
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>;
          })}
        </ul>
      </div>
    </>
  );
}

export default CentreOfExcellence

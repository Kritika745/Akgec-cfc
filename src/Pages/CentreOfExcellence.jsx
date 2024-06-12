import React from 'react'
import { useParams } from 'react-router-dom'
import  {advtoolroom,rnd,material,iiot} from '../constants/index'
import RDlab from '../Components/R&Dlab';
import Infra from '../Components/infrastructure';

const CentreOfExcellence = () => {

  const { id } = useParams();
  console.log(id);
  const getBgImage = (id) => {
    if (id === 'AdvToolRoom') {
      return {
        bgImage:
          "https://ucarecdn.com/ca9da199-d492-4bfb-91b1-9de92213e55e/-/preview/1000x666/",
        title: "Model Tool Room",
        desc: "Description for Model Tool Room",
        desc2: "Description for Model Tool Room",
        description:"The Tool Room is equipped with state-of-the-art machinery, offers a comprehensive environment for training, research, and consultancy. CNC 5-Axis Milling Centre, CNC Turn Mill, CNC Horizontal and Vertical Milling Centres are installed to ensure precise and complex machining. CNC Laser Cutting Machine & CNC Abrasive Water Jet Cutting Machines are available to provide advanced solutions for cutting of various materials with high accuracy and Wire-Cut EDM is installed to intricate part production. The facility is geared towards providing expert consultancy services, helping industries to solve complex manufacturing problems and optimize production processes"  ,
        data: advtoolroom,
      };
    } else if (id === 'R&DLab') {
      return {
        bgImage: 'https://ucarecdn.com/128b6d98-c469-4dec-b87b-1f86ed0c2e9d/-/preview/1000x666/',
        title: 'Research & Development',
        desc: 'Description for Research & Development Lab',
        desc2: 'Description for Research & Development Lab',
        data:rnd
      };
    } else if (id === 'Material') {
      return {
        bgImage: 'https://ucarecdn.com/d8f92026-8187-41ef-b606-4f115994c675/-/preview/1000x666/',
        title: 'Material',
        desc: 'Description for Material',
        desc2: 'Description for Material',
        description:
          "The Material Testing Lab is a state-of-the-art facility equipped with advanced instruments for comprehensive material analysis. Key equipment includes a Digital & Metallurgical Microscope for detailed microstructural examination, and an Optical Emission Spectrometer for precise elemental analysis, Universal Testing Machine (UTM) for tensile and compression tests, Impact Testing Machine, Fatigue Testing Machine to assess material durability under various conditions, Micro-Vickers, Rockwell, Brinell methods for hardness testing, Thermal Imager for material thermal properties and Salt Spray Corrosion Testing Machine to measure Corrosion resistance. The lab is also having Hot Mounting Press, Abrasive Cutting Machine, and Double Disc Polishing Machine sample preparation.This facility serves as a hub for training, research, and consultancy to provide valuable resources for material science investigations and industrial applications",
        data:material
      };
    }  else {
      return {
        bgImage: 'https://ucarecdn.com/484a66cb-a86c-4de6-8fe2-59ab540cd97c/-/preview/1000x666/',
        title: 'Default Title',
        desc: 'Default Description',
        desc2: 'Default Description',
        data:iiot
      };
    }
  }

  const bgImage = getBgImage(id);


  
  return (
    <>
      <div
        className="bg-fixed bg-center bg-cover h-[75vh] pt-10"
        style={{ backgroundImage: `url('${bgImage.bgImage}')` }}>

        <div className="flex items-center justify-center h-full w-full">
          <div className="bg-black bg-opacity-65 text-white h-full w-full text-center flex items-center">
            <div className='bg-yellow-300 bg-opacity-25 p-4'>
             <div className="flex  flex-col items-center justify-center p-6 border-l-[3px] border-[#FBDD07] ">
                  <h1 className="md:text-4xl text-2xl font-medium m-2">{bgImage.title}</h1>
                  <div className="flex items-center justify-center gap-1">
                    <h2 className="text-sm pr-2 border-r-2 border-[#FBDD07] ">{bgImage.desc}</h2>
                    <h2 className="text-sm">{bgImage.desc2}</h2>
                  </div>
            </div>
            </div>
          </div>
        </div>
      </div>
     
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-4xl mt-7 font-semibold mb-3 ">About Our Centre</h1>
        <hr className="w-[10%] border-t-[3px] border-yellow-300 mb-10" />
        <p className="text-center text-base text-black px-24 w-full">
          {bgImage.description}
        </p> 
      </div>

      {
        id === 'R&DLab' && <RDlab />
      }
      <Infra  data={bgImage.data} id={id}/>
    </>
  );
}

export default CentreOfExcellence

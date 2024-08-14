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
          "/adv/CNC HMC cover (2).JPG",
        title: "Model Tool Room",
        desc: "Description for Model Tool Room",
        desc2: "Description for Model Tool Room",
        description:"The Tool Room is equipped with state-of-the-art machinery, offers a comprehensive environment for training, research, and consultancy. CNC 5-Axis Milling Centre, CNC Turn Mill, CNC Horizontal and Vertical Milling Centres are installed to ensure precise and complex machining. CNC Laser Cutting Machine & CNC Abrasive Water Jet Cutting Machines are available to provide advanced solutions for cutting of various materials with high accuracy and Wire-Cut EDM is installed to intricate part production. The facility is geared towards providing expert consultancy services, helping industries to solve complex manufacturing problems and optimize production processes"  ,
        data: advtoolroom,
      };
    } else if (id === 'R&DLab') {
      return {
        bgImage: '/rnd/IMG_1669.JPG',
        title: 'Research & Development',
        desc: 'Description for Research & Development Lab',
        desc2: 'Description for Research & Development Lab',
        data:rnd
      };
    } else if (id === 'Material') {
      return {
        bgImage: '/material/IMG_1730.JPG',
        title: 'Material Testing Lab',
        desc: 'Description for Material',
        desc2: 'Description for Material',
        description:
          "The Material Testing Lab is a state-of-the-art facility equipped with advanced instruments for comprehensive material analysis. Key equipment includes a Digital & Metallurgical Microscope for detailed microstructural examination, and an Optical Emission Spectrometer for precise elemental analysis, Universal Testing Machine (UTM) for tensile, compression tests, Impact Testing Machine, Fatigue Testing Machine to assess material durability under various conditions, Micro-Vickers, Rockwell, Brinell methods for hardness testing, Thermal Imager for material with temperature measurement and Salt Spray chamber to evaluate Corrosion resistance of the material. The lab is also having Hot Mounting Press, Abrasive Cutting Machine, and Double Disc Polishing Machine for matellographic sample preparation.This facility serves as a hub for training, research, and consultancy to provide valuable resources for microscopy characterization and investigation of  material property used in industrial application ",
        data:material
      };
    }  else {
      return {
        bgImage: '/IMG_1695.JPG',
        title: 'IIOT',
        desc: 'Default Description',
        desc2: 'Default Description',
        description:
         "IIOT in tool rooms enables remote monitoring and predictive maintenance, optimizing workflows for efficient manufacturing operations. Real-time data collection and connectivity drive reduced downtime and enhanced productivity, facilitating smarter manufacturing processes. ",
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
      { id !== 'iiot' &&
      <Infra  data={bgImage.data} id={id}/>
    }
    </>
  );
}

export default CentreOfExcellence

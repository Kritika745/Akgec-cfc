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
        bgImage: '/adv/IMG_1607.JPG',
        title: 'Advanced Tool Room',
        desc: 'Description for Advanced Tool Room',
        desc2: 'Description for Advanced Tool Room',
        data:advtoolroom
      };
    } else if (id === 'R&DLab') {
      return {
        bgImage: '/material/IMG_1730.JPG',
        title: 'R&D Lab',
        desc: 'Description for R&D Lab',
        desc2: 'Description for R&D Lab',
        data:rnd
      };
    } else if (id === 'Material') {
      return {
        bgImage: '/rnd/IMG_1607.JPG',
        title: 'Material',
        desc: 'Description for Material',
        desc2: 'Description for Material',
        data:material
      };
    }  else {
      return {
        bgImage: '/IMG_1616.JPG',
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
        <h1 className="text-5xl mt-7 font-bold mb-4 ">About Our Center</h1>
        {/* <ul className="list-disc text-left text-black h-96 w-full">
          {data['Advance Tool Room'].map((item) =>{
              <div className='text-black h-96 w-full' key={item.name}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>;
          })}
        </ul> */}
      </div>
      {/* <Infra  data={bgImage.data}/> */}

      {
         id === 'R&DLab' && <RDlab />
      }
    </>
  );
}

export default CentreOfExcellence

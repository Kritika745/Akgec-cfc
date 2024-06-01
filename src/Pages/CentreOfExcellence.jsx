import React from 'react'
import { useParams } from 'react-router-dom'
import  {advtoolroom,rnd,material,iiot} from '../constants/index'
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
        className="bg-fixed bg-center bg-cover h-screen"
        style={{ backgroundImage: `url('${bgImage.bgImage}')` }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="bg-black bg-opacity-65 text-white p-10 h-[100%] w-[100%] rounded-lg shadow-md text-center">
            <div className="relative w-[100%] h-[100%] ">
              <div className="absolute bg-yellow-300 bg-opacity-35 h-32 bottom-44 w-[30%] left-0">
                <hr className="border-1" />
                <div className="flex flex-col items-center justify-center h-[100%] w-[100%] ">
                  <h1 className="text-4xl font-medium">{bgImage.title}</h1>
                  <div className="flex items-center justify-center gap-1">
                    <h2 className="text-md">{bgImage.desc}</h2>
                    <hr className="transform rotate-90 border-yellow-300 w-4" />
                    <h2 className="text-md">{bgImage.desc2}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Infra  data={bgImage.data}/>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Our Center</h1>
        {/* <ul className="list-disc text-left text-black h-96 w-full">
          {data['Advance Tool Room'].map((item) =>{
              <div className='text-black h-96 w-full' key={item.name}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>;
          })}
        </ul> */}
      </div>
    </>
  );
}

export default CentreOfExcellence

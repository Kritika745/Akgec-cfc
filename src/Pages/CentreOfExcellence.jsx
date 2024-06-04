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
        bgImage: 'https://ucarecdn.com/ca9da199-d492-4bfb-91b1-9de92213e55e/-/preview/1000x666/',
        title: 'Advanced Tool Room',
        desc: 'Description for Advanced Tool Room',
        desc2: 'Description for Advanced Tool Room',
        data:advtoolroom
      };
    } else if (id === 'R&DLab') {
      return {
        bgImage: 'https://ucarecdn.com/d8f92026-8187-41ef-b606-4f115994c675/-/preview/1000x666/',
        title: 'R&D Lab',
        desc: 'Description for R&D Lab',
        desc2: 'Description for R&D Lab',
        data:rnd
      };
    } else if (id === 'Material') {
      return {
        bgImage: 'https://ucarecdn.com/96824a7e-4f71-404b-acf9-6c46d7243eb1/-/preview/1000x666/',
        title: 'Material',
        desc: 'Description for Material',
        desc2: 'Description for Material',
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
      <Infra  data={bgImage.data}/>
    </>
  );
}

export default CentreOfExcellence

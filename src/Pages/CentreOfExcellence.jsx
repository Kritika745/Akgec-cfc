import React from 'react'
import { useParams } from 'react-router-dom'

const CentreOfExcellence = () => {

  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <div className="flex-1 items-center justify-center sm:bg-[url('')] bg-no-repeat bg-center ">
        <div className="flex">
        <img src="/IMG_1607.JPG" alt="" />
        </div>
        <div className="flex flex-col">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default CentreOfExcellence

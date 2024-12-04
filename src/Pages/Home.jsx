import React from 'react'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'
import Odop from '../Components/Odop.jsx'
import CFC from '../Components/CFC.jsx'
import Partner from '../Components/Partner.jsx'
import COE from '../Components/COE.jsx'
import Services from '../Components/Services.jsx'
import Infra from '../Components/infrastructure.jsx'
import CentreOfExcellence from './CentreOfExcellence.jsx'
import { useParams } from 'react-router-dom'


const Home = () => {
  
  const { id } = useParams();

  const getBgImage = (id) => {
    if (id === 'AdvToolRoom') {
      return {
        bgImage:
          "/adv/CNC HMC cover (2).JPG",
        title: "Modern Tool Room",
        desc: "Description for Modern Tool Room",
        desc2: "Description for Modern Tool Room",
        
        description:"The Tool Room is equipped with state-of-the-art machinery, providing a comprehensive environment for training, research, and consultancy. The facility includes, CNC 5-Axis Machining Centre, CNC Turn Mill, CNC Horizontal and Vertical Machining CentresThese machines ensure precise and complex machining capabilities. Additionally, the Tool Room features, CNC Laser Cutting Machine, and CNC Abrasive Water Jet Cutting Machines. These advanced machines offer high-accuracy solutions for cutting various materials. For intricate part production, the facility is also equipped with Wire-Cut EDM. The Tool Room is designed to provide expert consultancy services, assisting industries in solving complex manufacturing problems and optimizing production processes."  ,   
        data: advtoolroom,
      };}}
  const bgImage = getBgImage(id);
  
  return (
    <>
    <Navbar/>
    <Carousel/>
      <CFC/>
     <Odop/>
      <Services/>
      <COE/>
      {/* <Infra data={bgImage.data} id={id}/> */}
      {/* <CentreOfExcellence/> */}
      <Partner/>
    </>
  )
}

export default Home

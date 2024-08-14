import React from 'react'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'
import Odop from '../Components/Odop.jsx'
import CFC from '../Components/CFC.jsx'
import Partner from '../Components/Partner.jsx'
import COE from '../Components/COE.jsx'
import Services from '../Components/Services.jsx'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Carousel/>
      <CFC/>
     <Odop/>
      <Services/>
      <COE/>
      <Partner/>
    </>
  )
}

export default Home

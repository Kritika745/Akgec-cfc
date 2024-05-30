import React from 'react'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'
import Odop from '../Components/Odop.jsx'
import CFC from '../Components/CFC.jsx'
import About from '../Components/About.jsx'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Carousel/>
     <Odop/>
      <CFC/>
      <About />
    </>
  )
}

export default Home

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Css/Partner.css'

const Partner = () => {

   const item = [
      { title: 'INDIAN INSTITUTE OF MANAGEMENT & ENGINEERING SOCIETY (AKGEC)', imgSrc: '/amdocs.png' },
      { title: 'AKGEC SKILLS FOUNDATION', imgSrc: '/amdocs.png' },
      { title: 'JAKSON LIMITED', imgSrc: '/amdocs.png' },
      { title: 'JAKSON POWER PRIVATE LIMITED', imgSrc: '/amdocs.png' },
      { title: 'SUN STAR PRECISION FORGE LIMITED', imgSrc: '/amdocs.png' },
      { title: 'GHAZIABAD PRECISION PRODUCT PRIVATE LIMITED', imgSrc: '/amdocs.png' },
      { title: 'SPACE CHEM ENGINEERS PRIVATE LIMITED', imgSrc: '/amdocs.png' },
      { title: 'CHW FORGE PRIVATE LIMITED', imgSrc: '/amdocs.png' },
      { title: 'MONO-TECH ENGINEERS PRIVATE LIMITED ', imgSrc: '/amdocs.png' },
      { title: 'LUXMI METAL WORKS', imgSrc: '/amdocs.png' },
      { title: 'BHAWANI ROLLER FLOUR MILLS LIMITED', imgSrc: '/amdocs.png' },
      { title: 'RISSHTA FOODS PRIVATE LIMITED', imgSrc: '/amdocs.png' },
      { title: 'SURYAA STEELS', imgSrc: '/amdocs.png' },
      { title: 'SEA SHELL CERAMICS (INDIA) PRIVATE LIMITED', imgSrc: '/amdocs.png' },
      { title: 'SUPRA INDUSTRIES PRIVATE LIMITED', imgSrc: '/amdocs.png' },
      { title: 'HINDUSTAN PAPER (MACHINERY) INDUSTRIES', imgSrc: '/amdocs.png' },
      { title: 'SRM CONSTRUCTIONS', imgSrc: '/amdocs.png' },
      { title: 'SPECTRA PRODUCTS PRIVATE LIMITED', imgSrc: '/amdocs.png' },
      { title: 'GHAZIABAD MECHFAB PRIVATE LIMITED', imgSrc: '/amdocs.png' },
      { title: 'UTTAR PRADESH ENGINEERING COMPANY', imgSrc: '/amdocs.png' },
      { title: 'AMBICA STEELS LIMITED', imgSrc: '/amdocs.png' },
  ];

    const settings={
        dots:false,
        infinite:true,
        autoplay:true,
        speed:1000,
        SwipeToSlide:true,
        autoPlaySpeed:2000,
        slidesToShow:6,
        arrows:true,
        slidesToScroll:6,

        responsive:[
            {
                breakpoint:1350,
                settings:{
                    slidesToShow:5,
                    slidesToScroll:5,
                    infinite: true,
                },

                },
                {
                  breakpoint:1080,
                  settings:{
                      slidesToShow:4,
                      slidesToScroll:4,
                      infinite: true,
                  },
  
                  },

                  {
                    breakpoint:900,
                    settings:{
                        slidesToShow:3,
                        slidesToScroll:3,
                        infinite: true,
                    },
    
                    },
                    {
                      breakpoint:670,
                      settings:{
                          slidesToShow:2,
                          slidesToScroll:2,
                          infinite: true,
                      },
      
                      },
               
            {
                breakpoint: 576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                   
                },
            }
        ]

    }

  return (
    <div className='w-full flex flex-col sm:flex-row items-center justify-center overflow-x-hidden mt-10'>
      <div className='w-full sm:w-1/5 flex flex-col items-center justify-center '>
        <h1 className='text-2xl lg:text-3xl text-center font-bold border-r-none sm:border-r-[3px] border-yellow-400 p-2  text-[#203c70]'>INDUSTRY PARTNERS</h1>
        <hr className='sm:hidden border-t-[3px] border-[#FBDD07] w-[20%]' />

      </div>

   <div className='w-[90%] sm:w-4/5 flex  '>
      <Slider {...settings} className='w-full '>
         
      {item.map((item, index) => {
    return (
        <div key={index} className="flex items-center justify-center ">
            <div className='Partner py-4 px-3 flex  text-center font-bold text-black justify-center h-32 items-center flex-col  rounded-lg'>
                
                <h1>{item.title}</h1>
            </div>
        </div>
    );
})}
     </Slider>
     
     
      </div>
    </div>
  )
}

export default Partner

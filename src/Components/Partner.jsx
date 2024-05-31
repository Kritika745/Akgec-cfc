import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
        arrows:false,

        responsive:[
            {
                breakpoint:1250,
                settings:{
                    slidesToShow:5,
                    slidesToScroll:1,
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
    <div className='w-full flex overflow-x-hidden'>
      <div className='w-1/5 flex items-center justify-center '>
        <h1 className='text-3xl font-semibold border-r-[3px] border-yellow-400 p-2'>Industry Partners</h1>
      </div>

   <div className='w-4/5 flex flex-row '>
      <Slider {...settings} className='w-full'>
         
      {item.map((item, index) => {
    return (
        <div key={index} className=" py-4 px-3">
            <div className='flex bg-[#ffda4d] text-center items-center justify-center flex h-40 items-center flex-col  rounded-lg'>
                
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

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Partner = () => {

    const settings={
        dots:false,
        infinite:true,
        autoplay:true,
        speed:1000,
        SwipeToSlide:true,
        autoPlaySpeed:2000,
        slidesToShow:6,

        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite: true,
                    dots: true,
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
      <div className='w-1/4 flex items-center justify-center '>
        <h1 className='text-3xl font-semibold border-r-[3px] border-yellow-400 p-2'>Industry Partners</h1>
      </div>

   <div className='w-3/4 flex w-full'>
      <Slider {...settings} className='w-full'>
         
     <div className=" py-4 px-3">
           <div className='flex items-center flex-col  mt-3'>
            <img src='/amdocs.png' className='w-40 h-40 rounded-2' alt="" />
            
            
           </div>
        </div>

        <div className=" py-4 px-3">
           <div className='flex items-center flex-col  mt-3'>
            <img src='/ascendtek.png' className='w-40 h-40 rounded-2' alt="" />
            
            
           </div>
        </div>

         <div className=" py-4 px-3">
           <div className='flex flex-col items-center  mt-3'>
            <img src='/dish.png' className='w-40 h-40 rounded-2' alt="" />
           
           </div>
        </div>

       <div className=" py-4 px-3">
           <div className='flex flex-col items-center mt-3'>
            <img src='/ericsson.png' className='w-40 h-40 rounded-2' alt="" />
           
           </div>
        </div>

        <div className=" py-4 px-3">
           <div className='flex flex-col items-center mt-3'>
            <img src='/ironbo.png' className='w-40 h-40 rounded-2' alt="" />
            
           </div>
        </div>

        <div className=" py-4 px-3">
           <div className='flex flex-col items-center mt-3'>
            <img src='kgpco.png' className='w-40 h-40 rounded-2' alt="" />
           
           </div>
        </div>

        <div className=" py-4 px-3">
           <div className='flex flex-col items-center mt-3'>
            <img src='mastec.png' className='w-40 h-40 rounded-2' alt="" />
           
           </div>
        </div>
        
        <div className=" py-4 px-3">
           <div className='flex flex-col items-center mt-3'>
            <img src='nokia.png' className='w-40 h-40 rounded-2' alt="" />
           
           </div>
        </div>
           
        <div className=" py-4 px-3">
           <div className='flex flex-col items-center mt-3'>
            <img src='qualtek.png' className='w-40 h-40 rounded-2' alt="" />
           
           </div>
        </div>
        
        <div className=" py-4 px-3">
           <div className='flex flex-col items-center mt-3'>
            <img src='samsung.png' className='w-40 h-40 rounded-2' alt="" />
           
           </div>
        </div>
      

        <div className=" py-4 px-3">
           <div className='flex flex-col items-center mt-3'>
            <img src='sba.png' className='w-40 h-40 rounded-2' alt="" />
           
           </div>
        </div>

        <div className=" py-4 px-3">
           <div className='flex flex-col items-center mt-3'>
            <img src='techdash.png' className='w-40 h-40 rounded-2' alt="" />
           
           </div>
        </div>

        <div className=" py-4 px-3">
           <div className='flex flex-col items-center mt-3'>
            <img src='tilson.png' className='w-40 h-40 rounded-2' alt="" />
           
           </div>
        </div>

        <div className=" py-4 px-3">
           <div className='flex flex-col items-center mt-3'>
            <img src='tsc.png' className='w-40 h-40 rounded-2' alt="" />
           
           </div>
        </div>
        
        <div className=" py-4 px-3">
           <div className='flex flex-col items-center mt-3'>
            <img src='wca.png' className='w-40 h-40 rounded-2' alt="" />
           
           </div>
        </div>

     </Slider>
     
     
      </div>
    </div>
  )
}

export default Partner

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Partner = () => {

   const item = [
      { title: 'Title 1', imgSrc: '/amdocs.png' },
      { title: 'Title 2', imgSrc: '/amdocs.png' },
      { title: 'Title 3', imgSrc: '/amdocs.png' },
      { title: 'Title 4', imgSrc: '/amdocs.png' },
      { title: 'Title 1', imgSrc: '/amdocs.png' },
      { title: 'Title 2', imgSrc: '/amdocs.png' },
      { title: 'Title 1', imgSrc: '/amdocs.png' },
      { title: 'Title 2', imgSrc: '/amdocs.png' },
  ];

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

   <div className='w-3/4 flex flex-row '>
      <Slider {...settings} className='w-full'>
         
      {item.map((item, index) => {
    return (
        <div key={index} className="w-[300px] py-4 px-3">
            <div className='flex bg-yellow-400 text-center items-center justify-center flex h-40 items-center flex-col  mt-3'>
                
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

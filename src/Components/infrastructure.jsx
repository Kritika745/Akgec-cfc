import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CardTwo } from './Card';

const Infra = ({ data , id}) => {

    const settings={
        dots:false,
        infinite:true,
        autoplay:true,
        speed:1000,
        SwipeToSlide:true,
        autoPlaySpeed:2000,
        slidesToShow:3,

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
    <div className='w-full bg-gray-900 mt-12 flex overflow-x-hidden'>
      <div className='w-[20%] flex items-center justify-center '>
        <h1 className='text-3xl text-white font-semibold border-l-[3px] border-yellow-400 p-2'>Infrastructure</h1>
      </div>

   <div className='w-[78%] mx-9 py-3 flex flex-row '>
      <Slider {...settings} className="w-full">
      {data.map((item, index) => (
            <CardTwo key={index} subId={index+1} id={id} image={item.image} title={item.name} brief={item.brief} description={item.description} />
          ))}
     </Slider>
     
     
      </div>
    </div>
  )
}

export default Infra

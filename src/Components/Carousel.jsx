import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination,Mousewheel,Autoplay} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.css'


const Carousel = () => {


  return (
    <>
      <div className=" -z-1 pt-16 md:pt-20 ">
      <Swiper
        
        slidesPerView={1}
        centeredSlides={true}
        pagination={{
          clickable:true,
        }}
        loop={true}
        cssMode={true}
        sticky={false}
        freeMode={{ enable: true }}
        mousewheel={{
          mousewheel: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[ Pagination, Navigation, Mousewheel,Autoplay]}
      >
        <SwiperSlide>
            <div className=' flex w-full h-[45vh] sm:h-[60vh] md:h-[90vh] justify-center items-center'>
            <img src="/pic1.png" className='w-full h-full' alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=' flex w-full h-[45vh] sm:h-[60vh] md:h-[90vh] justify-center items-center'>
              <img src="/pic1.png" className='w-full h-full' alt="" />
                
            </div>
          </SwiperSlide> 
          <SwiperSlide>
            <div className=' flex w-full  h-[45vh] sm:h-[60vh] md:h-[90vh] justify-center items-center'>
            <img src="/pic1.png" className='w-full h-full' alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide3 flex w-full  h-[45vh] sm:h-[60vh] md:h-[90vh] justify-center items-center'>
            <img src="/Desktop2.png" className='w-full h-full' alt="" />
                    
            </div>
          </SwiperSlide>
        
      </Swiper>
      </div>
    </>
  );
}

export default Carousel
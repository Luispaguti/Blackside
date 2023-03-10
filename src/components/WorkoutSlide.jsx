import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import '../WorkoutSlider.css';
import {work} from '../constant/index';

import { Navigation } from 'swiper'

const WorkoutSlide = () => {
  // destructure workout//
  const { programs } = work;
  return (
    <Swiper slidesPerView={2}
    spaceBetween={32}
    navigation={true}
    // grabCursor={true}
    breakpoints={{
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
      1724: {
        slidesPerView: 5,
      },
    }}
    modules={[Navigation]}
    className='workoutSlider '>
      {programs.map((program,index) => {
        const { image, name, description} = program
        return (
        <SwiperSlide 
        className='lg:max-w-[620px] lg:max-h-[300px] relative min-[320px]:max-w-[320px] min-[320px]:max-h-[170px]'
        key={index}>
          <img className='w-full h-full object-cover' src={image} alt='image'/>
          <div className='bg-gray-100 relative group  '>
          <h4 className="flex justify-center  mb-6 bg-black text-white font-poppins font-semibold lg:text-[26px] lg:leading-[32px] min-[320px]:text-[16px] min-[320px]:leading-[16px] max-[600px]:text-[16px] max-[600px]:leading-[16px]">{name}</h4>
          <p className="flex justify-center font-poppins font-normal lg:text-[18px] lg:leading-[32px] bg-gray-100 text-black min-[320px]:leading-[16px] min-[320px]:text-[12px]max-[600px]:leading-[16px] max-[600px]:text-[12px]">{description}</p>
          {/* opacity-0 group-hover:opacity-100 duration-300 */}
          </div>
        </SwiperSlide>
        );
      })}
    </Swiper>
  )
}

export default WorkoutSlide;
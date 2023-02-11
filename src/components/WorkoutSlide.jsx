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
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1724: {
        slidesPerView: 5,
      },
    }}
    modules={[Navigation]}
    className='workoutSlider'>
      {programs.map((program,index) => {
        const { image, name} = program
        return (
        <SwiperSlide 
        className='max-w-[420px] max-h-[420px] relative'
        key={index}>
          <img className='w-full h-full object-cover' src={image} alt='image'/>
          <div className=' bg-red-100 relative group'>
          <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-5 flex justify-center items-end text-xl bg-gray-200 text-black font-semibold">{name}</div>
             
          </div>
        </SwiperSlide>
        );
      })}
    </Swiper>
  )
}

export default WorkoutSlide;
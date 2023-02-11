import React, { useState } from 'react';
import { BsChevronCompactLeft,BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled, RxDot } from 'react-icons/rx'
import {instalaciones1,
  instalaciones2 ,
  instalaciones3 ,
  instalaciones4 ,
  instalaciones5 ,
  instalaciones6 ,
  instalaciones7 ,
  instalaciones8 ,
  instalaciones9 ,
  instalaciones10,
  instalaciones11 ,
  instalaciones12,
  instalaciones13,
  instalaciones14,
  instalaciones15,
  instalaciones16,
  instalaciones17,
  instalaciones18,
  instalaciones19
} from '../assets/index'

const Carousel = () => {
  const slides = [
    {
      img: instalaciones1,
    },
    {
      img: instalaciones2,
    },
    {
      img: instalaciones3,
    },
    {
      img: instalaciones4,
    },
    {
      img: instalaciones5,
    },
    {
      img: instalaciones6,
    },
    {
      img: instalaciones7,
    },
    {
      img: instalaciones8,
    },
    {
      img: instalaciones9,
    },
    {
      img: instalaciones10,
    },
    {
      img: instalaciones11,
    },
    {
      img: instalaciones12,
    },
    {
      img: instalaciones13,
    },
    {
      img: instalaciones14,
    },
    {
      img: instalaciones15,
    },
    {
      img: instalaciones16,
    },
    {
      img: instalaciones17,
    },
    {
      img: instalaciones18,
    },
    {
      img: instalaciones19,
    },

  ];

  const [currentIndex, setCurrentIndex]=useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const nextIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <section id='Instalaciones' className='bg-black'>
 <div className='flex justify-center max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group max-sm:max-h-[400px] '>
 {/* <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500 '></div> */}
 {/* Left Arrow*/}
 <img src={slides[currentIndex].img} alt="slide" className='h-[100%] object-cover rounded-2xl duration-500 ' />
<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
  <BsChevronCompactLeft onClick={prevSlide} size={30}/>
</div>
 {/* Right Arrow*/}
 <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
  <BsChevronCompactRight onClick={nextSlide} size={30}/>
</div>
{/* <div className='flex top-4 justify-center py-2'>
    {slides.map((slide,slideIndex) => (
      <div key={slideIndex} onClick={() => goToSlide(slideIndex)} 
      className='text-2xl cursor-pointer '>
        <RxDot color='white' />
      </div>
    ))}
</div> */}
 </div>
 </section>
  )
}

export default Carousel
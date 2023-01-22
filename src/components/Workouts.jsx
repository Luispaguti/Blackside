import React from 'react'
import calendar from '../assets/calendar.svg'
import WorkoutSlide from './WorkoutSlide'

export const Workouts = () => {
  return (
    <section >
      {/*Section title*/}
        <div className='flex items-center justify-center -space-x-20 mb-[50px] lg:mb-[80px] max-w-[540px]
        mx-auto px-4 lg:px-0'
        data-aos='fade-up'
        data-aos-deLay="200">
          <img src={calendar} alt="calendar" />
          <h2 className='font-primary text-neutral-500 text-[32px]
           leading-[40px] lg:text-[50px] lg:leading-[50px] font-extrabold flex -space-x-4'>
             Training programs <span className='text-[#7DE7EB]'>.</span>
             </h2>
        </div>
        {/*slider*/}
        <div  data-aos='fade-up'
        data-aos-deLay="300">
          <WorkoutSlide/>
        </div>
    </section>
  )
}
export default Workouts;

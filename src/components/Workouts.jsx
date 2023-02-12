import React from 'react'
import calendar from '../assets/calendar.svg'
import WorkoutSlide from './WorkoutSlide'

export const Workouts = () => {
  return (
    <section id='entreno'>
      {/*Section title*/}
        <div className='flex items-center justify-center -space-x-20 mb-[50px] lg:mb-[80px] lg:mt-[80px] max-w-[540px]
        mx-auto px-4 lg:px-0 min-[320px]:mt-[100px] max-[600px]:mt-[100px]'
        // data-aos='fade-up'
        // data-aos-deLay="200"
        >
          <img src={calendar} alt="calendar" />
          <h2 className='font-poppins text-black text-[32px]
           leading-[40px] lg:text-[50px] lg:leading-[50px] '>
             Programas de entrenamiento <span className='text-[#7DE7EB]'>.</span> </h2>
            
        </div>
        {/*slider*/}
        <div  data-aos='fade-up'
        data-aos-deLay="300" className='mx-9'>
          <WorkoutSlide/>
        </div>
    </section>
  )
}
export default Workouts;

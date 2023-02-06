import React from 'react'

import { pricing } from '../constant/index'
import PlanList from './PlanList';

const Pricing = () => {
  // destructure pricing data
  const { icon, title, plans } = pricing;
  return (
    <section className='md:pb-[110px] lg:pb-[180px] lg:mt-[80px]'>
      <div className=' flex items-center justify-center -space-x-20 mb-[50px]
       lg:mb-[80px] max-w-[540px] mx-auto px-4 lg:px-0'
       data-aos='fade-up'
        data-aos-offset='200'
        data-aos-delay='200'>
        <img src={icon} alt="" />
        <h2 className='text-[32px] leading-[40px] lg:text-[50px] lg:leading-[50px] font-poppins'>
          {title} <span className='text-[#7DE7EB]'>.</span>
          </h2>
      </div>
      <PlanList plans={plans}/>
    </section>
  )
}

export default Pricing
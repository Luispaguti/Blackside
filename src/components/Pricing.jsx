import React from 'react'

import { pricing } from '../constant/index'
import PlanList from './PlanList';
import PlanList1 from './PlanList1';

const Pricing = () => {
  // destructure pricing data
  const { icon, title, number, plans ,plans2, plans3, pay } = pricing;
  return (
    <section id='Suscripciones' className='md:pb-[110px] lg:pb-[180px] lg:mt-[150px] min-[320px]:mt-[500px] max-[600px]:mt-[500px] '>
      <div className=' c -space-x-20 mb-[50px]
       lg:mb-[80px] max-w-[540px] mx-auto px-4 lg:px-0'
       data-aos='fade-up'
        data-aos-offset='200'
        data-aos-delay='200'>
        <img src={icon} alt="" />
        <h2 className='text-[32px] leading-[40px] lg:text-[50px] lg:leading-[50px] font-poppins'>
          {title} <span className='text-[#7DE7EB]'>.</span>
          </h2>
          <h3>{number}</h3>
      </div>
      <PlanList plans={plans}/>
      <div className='bg-[#575a5a] mt-4'>
      <PlanList plans={plans2}/>
      </div>
      <PlanList1 plans={plans3}/>
    </section>
  )
}

export default Pricing
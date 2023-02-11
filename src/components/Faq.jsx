import React from 'react'

import { faq } from '../constant/index'
import Accordion from './Accordion'


const Faq = () => {
  // destructure faq constant
  const { icon, title, accordions } = faq
  return (
    <section className='bg-black lg:mt-[80px] lg:mb-0 md:pt-[80px] md:mb-0 
    min-[320px]:mt-[100px] max-[600px]:mt-[100px]'>
      <div className='max-w-[768px] mx-auto
      lg:bg-faq bg-no repeat bg-custom bg-center
      lg:h-[1300px] lg:pt-6'>
        {/* section title */}
        <div className='flex items-center justify-center -space-x-20 mb-[50px] lg:mb-[80px]
        justify-start lg:justify-center -space-x-4 lg:max-w-[540px] mx-auto px-4 lg:px-0
        '
        data-aos='fade-up'
          data-aos-offset='200'
          data-aos-delay='200'>
          <img className='lg:hidden' src={icon} alt="icon" />
          <h2 className='text-[32px] text-white leading-[40px] lg:text-[50px] lg:leading-[50px] font-extrabold
          flex -space-x-4
          '>{title} <span className='text-[#eeee]'>.</span>
          </h2>
        </div>
         {/* accordion list */}
         <div className='flex flex-col gap-y-4 px-4'
         data-aos='fade-up'
         data-aos-offset='200'
         data-aos-delay='200'>
          {accordions.map((accordion, idx) => {
            return <Accordion accordion={accordion} 
            key={idx}/>
          })

          }
         </div>
      </div>
    </section>
  )
}

export default Faq
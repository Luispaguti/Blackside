import React from 'react'

import { faq } from '../constant/index'
import Accordion from './Accordion'


const Faq = () => {
  // destructure faq constant
  const { icon, title, accordions } = faq
  return (
    <section className=' pb-[80px] md:pb-[110px] lg:pb-[180px] pt-[480px]
    lg:pt-[280px]
    '>
      <div className='max-w-[768px] mx-auto
      lg:bg-faq bg-no repeat bg-custom bg-center
      lg:h-[1160px] lg:pt-6'>
        {/* section title */}
        <div className='flex items-center justify-center -space-x-20 mb-[50px] lg:mb-[80px]
        justify-start lg:justify-center -space-x-4 lg:max-w-[540px] mx-auto px-4 lg:px-0'>
          <img className='lg:hidden' src={icon} alt="icon" />
          <h2 className='text-[32px] leading-[40px] lg:text-[50px] lg:leading-[50px] font-extrabold
          flex -space-x-4 lg:mt-[100px]
          '>{title} <span className='text-[#eeee]'>.</span>
          </h2>
        </div>
         {/* accordion list */}
         <div>
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
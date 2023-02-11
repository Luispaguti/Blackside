import React from 'react'
import CommunitySlider from './CommunitySlider';

import { community } from '../constant/index'

const Community = () => {

  // destructure community data
  const { icon, title, testimonials } = community;
  return (
    <section id='Comunidad' className='relative  pb-[80px] md:pb-[500px]   lg:pb-[377px] lg:pt-[150px] min-[320px]:mt-[100px] max-[600px]:mt-[100px] '>
      <div className='container mx-auto'>
        <div className='flex'>
          {/* section title */}
          <div className='flex items-center justify-center -space-x-10 mb-[50px] lg:mb-[80px] max-w-[240px] px-4 lg:px-0 lg:ml-24 mx-auto' >
            <img src={icon} alt="icon" />
            <h2 
            className=' 
            text-[32px] leading-[40px] lg:text-[50px] lg:leading-[50px] font-ppopins flex -space-x-4'>
              {title} <span >.</span>
            </h2>
          </div>
          {/* slider */}
          <div
          className='absolute -right-[375px] lg:-right-[0px] w-[1140px] top-48 '>
             <CommunitySlider testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community
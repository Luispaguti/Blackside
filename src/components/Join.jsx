import React from 'react'

// import data
import { join } from '../constant/index'

const Join = () => {
  // destructure join data
  const { image, title, subtitle, btnText } = join;
  return (
    <section className='bg-black min-h-[537px] lg:pt-[10px] min-[320px]:mt-[200px] max-[600px]:mt-[200px] min-[320px]:min-h-[53px] max-[600px]:min-h-[53px] '>
      <div className='container mx-auto'>
        {/* image & text wrapper */}
        <div className='flex flex-col md:flex-row md:items-center md:-space-x-12 -space-y-24 lg:-space-y-0'>
          {/* image */}
          <div
            className='-mt-[80px] max-w-[276px] md:max-w-[442px] lg:max-w-full'
            data-aos='fade-right'
            data-aos-offset='100'
            data-aos-delay='200'
          >
            <img src={image} alt='' />
          </div>
          {/* text */}
          <div
            className='max-w-[350px] lg:max-w-[492px] ml-[30px]'
            data-aos='fade-left'
            data-aos-offset='100'
            data-aos-delay='200'
          >
            <h2 className=' md:text-[60px] md:leading-[62px] text-white mb-4 lg:mb-6 min-[320px]:text-[30px] max-[600px]:text-[30px]'>
              Quieres<span className='text-primary-200'></span> pasarlo bien & ponerte en forma?
            </h2>
            <p className='md:text-[30px] md:leading-[32px] text-[#C3C8C8] font-bold mb-4 lg:mb-6 max-w-[348px] md:max-w-[470px] lg:max-w-[492px]'>
              {subtitle}
            </p>
            <button className='text-white btn btn-secondary btn-lg md:text-[30px] md:leading-[32px] font-bold'>{btnText}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
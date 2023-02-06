import React from 'react'
import { logo2 } from '../assets'

function Home() {
  return (
    <section id="home" className='bg-white ' >
      <div className='max-w-[1400px] h-[680px] w-full m-auto py-16 px-4 relative group max-sm:max-h-[400px]'>
          <img src={logo2}
          className='w-full h-full'
          alt="logo" data-aos='fade'
            data-aos-delay='800' />
        {/* <div className='flex items-center justify-center'>
          <h3 className='font-primary text-[#7DE7EB] text-[32px]
           leading-[40px] lg:text-[50px] lg:leading-[50px] font-extrabold flex -space-x-4' 
           >
            Bienvenido
          </h3>
        </div> */}
      </div>
    </section>
  )
}

export default Home
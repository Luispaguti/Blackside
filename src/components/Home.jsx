import React from 'react'
import styles from '../style';
import { discount, logo1, prax, robot, logo2 } from '../assets'
import GetStarted from './GetStarted'

function Home() {
  return (
    <section id="home" className='bg-white ' >
        <div class="bg-white flex justify-center ">
          <img class="w-[70%]" src={logo2} alt="logo" data-aos='fade-left'
              data-aos-delay='300'/>
        </div>
        <div class="bg-white flex justify-center pt-0 pb-10 ">
        <h3 className="bg-white hover:bg-gray-100 font-poppins text-[46px] font-semibold px-4 " data-aos='fade-up'
              data-aos-delay='600' >
              "Bienvenido"
          </h3>
        </div>
    </section>
  )
}

export default Home
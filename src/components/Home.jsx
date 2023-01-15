import React from 'react'
import styles from '../style';
import { discount, logo1, prax, robot, logo2 } from '../assets'
import GetStarted from './GetStarted'

function Home() {
  return (
    <section id="home" className='bg-white' >
        <div class="bg-white flex justify-center ">
          <img class="w-[70%]" src={logo2} alt="logo" data-aos='fade-down'
              data-aos-delay='600'/>
        </div>
        <div class="bg-white flex justify-center py-10 ">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" data-aos='fade-up'
              data-aos-delay='600'>
              Bienvenido
          </button>
        </div>
    </section>
  )
}

export default Home
import React from 'react'
import {IoIosArrowDropupCircle} from 'react-icons/io'
import { about } from '../constant/index'
import styles from '../style';
import { prax } from '../assets/index';

const About = () => {

  return (
    <section className='bg-white h-[790px]'>
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full relative -space-x-48 lg:-space-x-24'>
          <div className='text-black flex-1 z-10 pl-6 lg:pl-0 bg-slate-50'>
            <h1
              className='font-poppins font-semibold text-[60px] leading-[52px] text-black mb-8'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              Our Mision <br />
              <span className='text-primary-200'>FIT</span>
            </h1>
            <p
              className='font-poppins font-normal text-[16px] leading-[22px] max-w-[415px] text-body-md lg:text-body-lg mb-8'
              data-aos='fade-down'
              data-aos-delay='600'
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In alias eum numquam quasi recusandae, ad quaerat fugit quia ea earum ipsa vero! At exercitationem, consectetur distinctio dolorum tempora aperiam molestiae.
            </p>
           
          </div>
          {/* image */}
          
            <img  src={prax} alt="prax" className='w-full h-full bg-banner bg-cover bg-right lg:bg-center bg-no-repeat flex-1'
            data-aos='fade-right'
            data-aos-delay='900' />
          
        </div>
      </div>
    </section>
  );
};

export default About
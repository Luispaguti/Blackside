import React from 'react'
import {IoIosArrowDropupCircle} from 'react-icons/io'
import { about } from '../constant/index'
import styles from '../style';
import { prax } from '../assets/index';

const About = () => {

  return (
    <section className='h-[790px] bg-black md:mb-[110px] lg:mt-[80px]'>
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full relative -space-x-48 lg:-space-x-24'>
          <div className='text-black flex-auto rounded  pl-6 lg:pl-0 z-10 md:z-0 bg-slate-200'>
            <h1
              className='font-poppins font-semibold text-[50px] leading-[52px] text-black mb-8 ml-11 mt-8'
              data-aos='fade-down'
              data-aos-delay='500'
            >
             <span className='text-[#C3C8C8] font-extrabold text-[50px]' > EN BLACKSIDE,</span>  <br></br> TE AYUDAMOS A  <br />MEJORAR DENTRO <br /> DEL GIMNASIO PARA <br /><span className='text-[#C3C8C8]'> QUE PUEDAS VIVIR <br /> PLENAMENTE FUERA <br /> DE EL </span>           
            </h1>
            {/* <p
              className='font-poppins font-normal text-[16px] leading-[22px] max-w-[415px] text-body-md lg:text-body-lg mb-8 ml-11'
              data-aos='fade-down'
              data-aos-delay='600'
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In alias eum numquam quasi recusandae, ad quaerat fugit quia ea earum ipsa vero! At exercitationem, consectetur distinctio dolorum tempora aperiam molestiae.
            </p> */}
           
          </div>
          {/* image */}
          
            <img  src={prax} alt="prax" className='w-full h-full pr-11  bg-banner bg-cover bg-right lg:bg-center bg-no-repeat flex-1 max-sm:max-h-[600px] rounded'
            data-aos='fade-right'
            data-aos-delay='900' />
          
        </div>
      </div>
    </section>
  );
};

export default About
import React, { useState } from 'react';

import { BsCheckCircleFill } from 'react-icons/bs';

const PlanList1 = ({ plans }) => {

  const [index, setIndex] = useState(0)

  return (
    <div className='flex flex-col lg:flex-row items-center
     justify-center max-w-[1280px] mx-auto gap-y-4 ' >
      {plans.map((plan, currentIndex) => {
        //destructure plan
        const { name, type, price, list, number, delay, pay, pay2 } = plan;

        return (
          <div
            onClick={() => setIndex(currentIndex)}
            className='w-full md:max-w-[620px] lg:max-w-[500px]
             rounded-sm px-4 lg:min-h-[550px] '
            key={currentIndex}
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-delay={delay}
            
            >
            <div className={`${currentIndex === index ?
              'bg-black text-white' :
              'bg-neutral-400/10  text-black'
              }  py-[40px] px-[30px] lg:min-h-[550px] transition duration-100`}>
                <div className='lg:flex-col gap-x-8 gap-y-8 lg:gap-x-0 items-center'>
              {/* name & price wrapper */}
              <div>
                <div  className={`${
                      currentIndex === index
                        ? 'bg-white text-black'
                        : 'bg-black text-white'
                    } h-[26px] font-poppins text-sm font-bold max-w-min 
                    mx-auto px-[14px] mb-8`} >
                      {type}
                    </div>
                <div className='min-[320px]:text-[30px] max-[600px]:text-[30px] text-[40px] lg:text-[50px] font-primary font-extrabold mb-8'>
                  <div className='leading-none'>
                    <span className='tracking-[0.1px] '>{name}</span>
                  </div>
                </div>
              </div>
              {/* list & btn wrapper */}
              <div>
                {/* list */}
                <ul className='flex flex-col gap-y-4 mb-8'>
                <span className='text-md font-medium font-poppins'>{number}</span>
                  {list.map((item,index)=> {
                    return (
                    <li className='flex items-center gap-x-[10px] font-poppins' key={index}>
                      <BsCheckCircleFill className='text-lg'/>
                      <div>{item.number}</div>
                      <div>{item.name}</div>
                      <div>{item.pay}</div>
                      
                      </li>
                      );
                  })}
                  <span className='text-md font-medium font-poppins'>{pay}</span>
                  <span className='text-md font-medium font-poppins'>{pay2}</span>
                </ul>
                
                {/*btn */}
                {/* <button
                    className={`${
                      currentIndex === index
                        ? 'bg-white text-neutral-500'
                        : 'border border-neutral-500'
                    } flex justify-center items-center
                    font-primary font-bold uppercase text-[14px]
                     leading-[18px] h-[46px] px-[40px] tracking-[1px] 
                     rounded-[1px] lg:mx-auto`}
                  >
                    Join now
                  </button> */}
              </div>
            </div>
          </div>
        </div>
        )
      })}
    </div>
  )
}

export default PlanList1
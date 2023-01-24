import React, { useState } from 'react';

// import icons
import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa';

const Accordion = ({ accordion }) => {
  const [isOpen, setIsOpen] = useState(false);

  // destructure accordion
  const { question, answer } = accordion;
  return (
    <div className='cursor-pointer'>
      <div className='bg-white border rounded-sm'>
      <div className='min-h-[60px] flex items-center justify-between px-[30px]'>
        <h6 className='text-[18px] leading-[28px] font-bold'>{question}</h6>
        <div>
        {isOpen ? (
              <FaChevronCircleUp className='text-[20px] text-neutral-500' />
            ) : (
              <FaChevronCircleDown className='text-[20px] text-neutral-500' />
            )}
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Accordion
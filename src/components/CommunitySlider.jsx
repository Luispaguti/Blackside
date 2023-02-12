import React from 'react';
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const CommunitySlider = ({ testimonials }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={32}
      centeredSlides={'auto'}
      grabCursor={true}
      modules={[]}
      className='communitySlider'
    >
      {testimonials.map((testimonial, idx) => {
        // destructure testimonial
        const { image, name, message } = testimonial;
        return (
          <SwiperSlide key={idx}>
            <div className='relative '>
              {/* image  min-[320px]:w-[100px] */}
              <div>
                <img src={image} alt='image' className='lg:w-[1140px] min-[320px]:w-[300px] max-[600px]:w-[440px]' />
              </div>
              {/* message & name */}
              <div className='absolute bottom-[30px] p-[20px] text-white text-center '>
                <div className='mb-8 italic lg:text-lg font-light  min-[320px]:text-[10px] min-[320px]:leading-[10px] '>{message}</div>
                <div className='flex items-center justify-center gap-x-[3px]'>
                  <span className='text-[30px] text-primary-200 font-bold'>
                    ~
                  </span>
                  <div className='lg:text-[20px] font-bold min-[320px]:text-[14px] '>{name}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CommunitySlider;
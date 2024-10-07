'use client';
import { testimonialsData } from '@/utils/data';
import Slider from './SwiperSlider';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { SwiperNavButtons } from './SwiperNavButtons';

export default function Testimonials() {
  return (
    <section className='max-w-[1440px] mx-auto lg:px-24 px-4 relative pb-24' id='testimonials-section'>
      <div className='flex flex-col md:gap-9 gap-5'>
        <p className='sm:text-[20px] text-[16px] font-PoppinsBold tracking-[0.22em] md:text-left text-center'>TESTIMONIALS</p>
        <div className='[&_.swiper-slide]:h-auto [&_.swiper]:pt-28'>
          <h1 className='absolute md:text-[53px] sm:text-[40px] text-2xl md:leading-[58px] font-PoppinsBold md:text-left text-center section-heading translate-y-[30%] opacity-0'>
            Hear from our community
          </h1>

          <Slider
            breakpoints={{
              1025: { slidesPerView: 3, spaceBetween: 24 },
              767: { slidesPerView: 2, spaceBetween: 20 },
              576: { slidesPerView: 1, spaceBetween: 20 },
            }}
            loop={true}
            navigation={false}>
            {testimonialsData.map((testimonial) => {
              return (
                  <SwiperSlide key={testimonial.id} className=''>
                    <div className='flex flex-col gap-7 py-10 md:px-6 px-4 border-[8px] border-white bg-[#F0F0F066] rounded-3xl overflow-hidden testimonialCards opacity-0 translate-y-[100px] h-full'>
                      <div className='flex gap-5 items-center'>
                        <Image src={testimonial.img} alt={testimonial.author} width={82} height={82} />
                        <div>
                          <h1 className='sm:text-3xl text-[18px] font-SFProDisplayBold sm:leading-10 '>{testimonial.author}</h1>
                          <p className='font-PoppinsMed leading-4'>{testimonial.company}</p>
                        </div>
                      </div>
                      <div>
                        <p className='font-PoppinsMed leading-6 italic text-[#000]'>{testimonial.msg}</p>
                      </div>
                    </div>
                  </SwiperSlide>
              );
            })}
            <SwiperNavButtons />
          </Slider>
        </div>
      </div>
      <div className='bg-[#5BB4A9] opacity-30 w-[666px] max-w-full h-[666px] rounded-full absolute top-[-55%] -z-10 left-24 blur-[200px]'></div>
      <div className='bg-[#775BB4] opacity-20 w-[666px] max-w-full h-[666px] rounded-full absolute top-0 -z-10 right-0 blur-[200px]'></div>
    </section>
  );
}

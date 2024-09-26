'use client';
import React from 'react';
import Slider from './SwiperSlider';
import { SwiperSlide } from 'swiper/react';
import { imagesSlider } from '@/utils/data';

export default function ImageSlider() {
  return (
    <>
      <section className='mt-52'>
        <p className='sm:text-[20px] text-[16px] font-PoppinsBold tracking-[0.22em] text-center md:mb-10 mb-5'>Proud to partner with</p>
        <div className='[&_.swiper-pagination-bullets]:hidden max-w-[1440px] mx-auto lg:px-24 px-4 [&_svg]:w-36 [&_svg]:h-16 [&_svg]:object-contain h-[140px] flex items-center [&_.swiper-slide]:flex [&_.swiper-slide]:justify-center relative opacity-70'>
          <Slider
            speed={1700}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={false}
            breakpoints={{
              1025: { slidesPerView: 6, spaceBetween: 30 },
              767: { slidesPerView: 4, spaceBetween: 20 },
              576: { slidesPerView: 2, spaceBetween: 20 },
            }}>
            {imagesSlider.map((img) => {
              const ImgComponent = img.logo;
              return (
                <SwiperSlide key={img.id}>
                  <ImgComponent />
                </SwiperSlide>
              );
            })}
          </Slider>
          <div className='bg-[linear-gradient(90deg,_#FFFFFF_0%,_rgba(255,_255,_255,_0)_100%)] w-[359px] h-[140px] absolute z-10 lg:block hidden'></div>
          <div className='bg-[linear-gradient(90deg,_#FFFFFF_0%,_rgba(255,_255,_255,_0)_100%)] w-[359px] h-[140px] absolute z-10 right-20 lg:block hidden blur-lg rotate-180'></div>
        </div>
      </section>
    </>
  );
}

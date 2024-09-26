import { SliderNextIcon } from '@/components/IconSVG';
import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className='swiper-nav-btns flex justify-center pt-4 gap-4'>
      <button
        onClick={() => swiper.slidePrev()}
        className='lg:hidden flex [&_svg]:rotate-180 bg-[#EDEDED80] hover:bg-[#ffffff50] md:pr-1 rounded-full md:w-[70px] md:h-[70px] w-10 h-10 items-center justify-center md:border-[3px] border-[2px] border-white px-3 md:px-0'>
        <SliderNextIcon />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className='bg-[#EDEDED80] hover:bg-[#ffffff50] md:pl-1 rounded-full md:w-[70px] md:h-[70px] w-10 h-10 lg:absolute top-0 right-0 flex items-center justify-center md:border-[3px] border-[2px] border-white px-3 md:px-0'>
        <SliderNextIcon />
      </button>
    </div>
  );
};

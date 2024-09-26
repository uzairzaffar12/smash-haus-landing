'use client';
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation, A11y } from 'swiper/modules';

type Breakpoints = {
  [key: number]: {
    slidesPerView: number;
    spaceBetween: number;
  };
};
type Autoplay = {
  delay: number;
  disableOnInteraction: boolean;
};

interface SliderProps {
  children: React.ReactNode;
  loop: boolean;
  navigation: boolean;
  breakpoints: Breakpoints;
  autoplay?: Autoplay;
  speed?: number;
}

export default function Slider({ children, loop, navigation, breakpoints, autoplay, speed }: SliderProps) {
  return (
    <>
      <Swiper breakpoints={breakpoints} spaceBetween={30} loop={loop} autoplay={autoplay} speed={speed} navigation={navigation} modules={[Autoplay, Pagination, Navigation, A11y]} className='mySwiper'>
        {children}
      </Swiper>
    </>
  );
}

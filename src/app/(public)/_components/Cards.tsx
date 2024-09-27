import { cardsData } from '@/utils/data';
export default function Cards() {
  return (
    <section className='max-w-[1440px] mx-auto lg:px-24 px-4 relative' id='cards-section'>
      <div className='md:pt-24 pt-10'>
        <p className='sm:text-[20px] text-[16px] font-PoppinsBold tracking-[0.22em] text-center md:mb-10 mb-5'>WHY CHOOSE SMASHHAUS?</p>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7'>
          {cardsData.map((card) => (
            <div key={card.id} className='border border-[#D6D6D6] md:py-[75px] py-12 px-6 rounded-[47px] bg-white translate-x-[-100px] opacity-0 cards'>
              <h1 className='md:text-[32px] text-xl font-PoppinsBold md:leading-9 md:mb-4 mb-3 md:h-28'>{card.title}</h1>
              <p className='md:text-[22px] text-sm text-[#6A6A6A] md:leading-6 font-PoppinsMed'>{card.descript}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='bg-[#54BBD7] opacity-20 w-[908px] max-w-full h-[908px] rounded-full absolute top-[94px] right-[-20%] z-20 blur-[200px]'></div>
    </section>
  );
}

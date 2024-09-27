import LinkButton from '@/interfaces/LinkButton';
import netflixLogo from '@/assets/images/netflix-logo.svg';
import Image from 'next/image';
import user from '@/assets/images/user.png';
import { agents } from '@/utils/data';
import { SonyLogo } from '@/components/IconSVG';

export default function Hero() {
  return (
    <>
      <section className='max-w-[1440px] mx-auto '>
        <div className='flex flex-col md:gap-7 gap-5 pt-24 md:pb-28 pb-16 lg:max-w-[898px] mx-auto items-center text-center px-4 lg:px-0'>
          <h2 className='sub-text translate-y-[-60%] opacity-0 font-SFProDisplayBold tracking-[0.11em] md:text-4xl text-2xl'>MUSIC MAKERS</h2>
          <h1 className='main-heading translate-y-[30%] opacity-0 font-PoppinsBold xl:text-[83px] sm:text-[60px] text-4xl xl:leading-[83px] sm:leading-[70px]'>
            <span>Get Heard. Get Seen. Get Paid.</span>
          </h1>
          <p className='paragraph-text translate-y-[30%] opacity-0 sm:text-3xl text-lg font-SFProDisplayBold'>
            Instantly access music licensing, exposure opportunities, and more from a global network of companies actively seeking music.
          </p>
          <div className='flex gap-4 md:flex-row flex-col z-30'>
            <div className='w-[56px] hero-btn overflow-hidden transition-[width] text-nowrap scale-0'>
              <LinkButton label='Creator Signup' href={'https://smash.haus/sign-up'} target='_blank' variant='blue' />
            </div>
            <div className='w-[56px] hero-btn overflow-hidden transition-[width] text-nowrap scale-0'>
              <LinkButton label='Start Hiring' href={'/'} variant='white' />
            </div>
          </div>
        </div>
        <div className='relative'>
          <div className='flex justify-center'>
            <div className='rectangle max-w-[895px] overflow-hidden lg:mx-0 mx-4 bg-white md:rounded-[70px] rounded-[40px] md:py-16 py-6 shadow-grey relative z-30 opacity-0'>
              <div className='flex flex-col sm:gap-12 gap-5'>
                <h1 className='md:text-[53px] sm:text-[40px] text-2xl font-PoppinsBold sm:leading-[58px] leading-7 max-w-[653px] mx-auto px-4 text-center '>SmashHaus directly connects you to </h1>
                <div className='flex flex-wrap sm:px-12 px-4 sm:gap-3 gap-2 justify-center'>
                  {agents.map((agent) => (
                    <div key={agent} className='sm:text-[18px] text-sm leading-4 font-SFProDisplayMed sm:py-6 sm:px-10 py-2 px-4  rounded-full border border-[#E0E0E0]'>
                      {agent}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='bg-[#5B7CB4] opacity-30 w-[666px] max-w-full h-[666px] rounded-full absolute top-[-162px] right-[15%] -z-10 blur-[200px]'></div>
          <div className='bg-[#B25BB4] opacity-30 w-[666px] max-w-full h-[666px] rounded-full absolute top-[-40px] left-[5%] -z-10 blur-[200px]'></div>
          <div className='bg-[#5BB4A9] opacity-30 w-[666px] max-w-full h-[666px] rounded-full absolute bottom-[-285px] right-[12%] z-20 blur-[200px]'></div>
          <div className='bg-[#B45B5B] opacity-20 w-[666px] max-w-full h-[666px] rounded-full absolute bottom-[-394px] left-[68px] z-20 blur-[200px]'></div>
          <div className='bg-white md:rounded-[70px] rounded-[40px] shadow-grey absolute md:p-11 p-4 sm:top-[226px] top-[195px] lg:right-[92px] right-[-10%] z-40 netflix-box translate-x-[-60px] opacity-0'>
            <div className='flex flex-col sm:gap-7 gap-3 items-center'>
              <Image src={netflixLogo} alt='netflix' />
              <div className='text-center'>
                <p className='font-PoppinsBold sm:text-[22px] text-lg mb-2 leading-6'>New opportunity!</p>
                <p className='sm:text-[19px] text-sm leading-6 font-SFProDisplayReg'>Soulful songs needed for a feature film</p>
              </div>
              <div className='flex gap-7 px-12 bg-[#F3F3F3] rounded-3xl sm:py-4 py-2'>
                <div className='text-center'>
                  <p className='mb-2 font-PoppinsMed sm:text-[16px] text-[12px]'>BUDGET</p>
                  <p className='sm:px-5 sm:py-2 px-3 py-1 sm:text-[16px] text-[12px] rounded-full bg-[#5BB4A9] font-SFProDisplayBold text-white'>$10,000</p>
                </div>
                <div className='text-center'>
                  <p className='mb-2 font-PoppinsMed sm:text-[16px] text-[12px]'>STATUS</p>
                  <p className='sm:px-5 sm:py-2 px-3 py-1 rounded-full bg-[#5BB4A9] sm:text-[16px] text-[12px] font-SFProDisplayBold text-white'>Open</p>
                </div>
              </div>
              <div className='w-[205px]'>
                <LinkButton href='/' label='Submit Track' variant='blue' />
              </div>
            </div>
          </div>
          <div className='w-[773px] h-[560px] bg-white opacity-30 rounded-[47px] absolute bottom-[-154px] right-[175px] z-20'></div>
          <div className='w-[808px] h-[588px] lg:block hidden bg-white opacity-30 rounded-[47px] absolute top-[-60px] left-[150px] -z-10'></div>

          <div className='bg-white lg:block hidden rounded-[70px] shadow-grey w-[400px] absolute top-[155px] lg:left-0 left-[-20%] z-40 user-elem translate-y-8 opacity-0'>
            <div className='flex gap-7 md:p-11 p-4 items-center'>
              <Image src={user} alt='user' width={50} height={50} className='rounded-full' />
              <p className='font-PoppinsMed text-[22px] leading-6'>Jason just liked your new track 👍🏼 </p>
            </div>
          </div>
          <div className='bg-white rounded-[70px] lg:block hidden shadow-grey absolute z-40 w-[314px] top-[80%] left-[104px] sony-tag translate-y-8 opacity-0'>
            <div className='flex flex-col gap-7 md:p-11 p-4 text-center items-center '>
              <SonyLogo />
              <p className='leading-6 text-[22px] font-PoppinsMed'>Sony just paid for your song 🥳 </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

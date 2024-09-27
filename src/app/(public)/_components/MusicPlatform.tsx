import LinkButton from '@/interfaces/LinkButton';
import Image from 'next/image';
import universalLogo from '@/assets/images/universal-logo.svg';

export default function MusicPlatform() {
  return (
    <>
      <section className='md:pt-[170px] pt-20 max-w-[1440px] mx-auto md:pb-52 pb-24 relative'>
        <div className='text-center relative z-30'>
          <p className='sm:text-[20px] text-[16px] font-PoppinsBold tracking-[0.22em] mb-7 '>WHY WE MATTER</p>
          <div className='max-w-[1023px] mx-auto px-4 lg:px-0'>
            <h1 className='md:text-[53px] sm:text-[40px] text-2xl md:leading-[58px] font-PoppinsBold md:text-left text-center section-heading translate-y-[30%] opacity-0'>
              The only music platform where you control your own client relationships.
            </h1>
          </div>
        </div>
        <div className='md:pt-[130px] pt-20 relative'>
          <div className='bg-[#F0F0F066] shadow-grey border-[10px] border-white rounded-[42px] md:pl-12 pl-4 md:pr-16 pr-4 py-12 max-w-[921px] mx-auto music-card opacity-0'>
            <div className='flex flex-col gap-9'>
              <div className='flex gap-4 md:flex-row flex-col'>
                <Image src={universalLogo} alt='universal' />
                <p className='md:text-3xl text-xl md:leading-10 font-SFProDisplayBold musicBox-text opacity-0 translate-x-[-50px]'>Soulful songs needed for a feature film</p>
              </div>
              <div className='flex md:w-[80%] w-full justify-between musicBox-text opacity-0 md:flex-nowrap flex-wrap md:gap-0 gap-7 translate-x-[-50px]'>
                <div className='flex flex-col gap-5 text-[#000]'>
                  <p className='md:text-[22px] text-sm font-PoppinsMed md:leading-6'>Buyer type:</p>
                  <p className='md:text-[22px] text-sm font-PoppinsMed md:leading-6'>Created on:</p>
                  <p className='md:text-[22px] text-sm font-PoppinsMed md:leading-6'>Type:</p>
                </div>
                <div className='flex flex-col gap-5 text-[#000]'>
                  <p className='md:text-[22px] text-sm font-PoppinsMed md:leading-6'>Direct license</p>
                  <p className='md:text-[22px] text-sm font-PoppinsMed md:leading-6'>Sep 12 2024</p>
                  <p className='md:text-[22px] text-sm font-PoppinsMed md:leading-6'>Music Licensing</p>
                </div>
                <div className='flex flex-col gap-3'>
                  <div className='flex items-center gap-5'>
                    <p className='md:text-[22px] text-sm font-PoppinsMed md:leading-6 text-[#000]'>Budget</p>
                    <p className='sm:px-5 sm:py-2 px-3 py-1 sm:text-[16px] text-[12px] rounded-full bg-[#5BB4A9] font-SFProDisplayBold text-white'>$10,000</p>
                  </div>
                  <div className='flex items-center gap-5'>
                    <p className='md:text-[22px] text-sm font-PoppinsMed md:leading-6 text-[#000]'>Status</p>
                    <p className='sm:px-5 sm:py-2 px-3 py-1 sm:text-[16px] text-[12px] rounded-full bg-[#5BB4A9] font-SFProDisplayBold text-white'>Open</p>
                  </div>
                </div>
              </div>
              <div>
                <p className='text-[#626262] font-PoppinsMed leading-6 musicBox-text opacity-0 translate-x-[-50px]'>
                  A Music Supervisor is seeking soulful, thoughtful, and retro-sounding songs. The film is set in a nostalgic period, and the ask is for music that captures the essence and vibe of
                  soulful sound. The songs should evoke deep emotion, conveying raw feelings and genuine passion. Lyrics should reflect introspection, self-discovery, and personal growth. Songs that
                  have a vintage, classic soul so und, reminiscent of the soul music era of the 1960s and 1970s. A mix of upbeat and mid-tempo songs is desired. Male and female vocals are welcome.
                  Worldwide, All Media, In Perpetuity
                </p>
              </div>
              <div className='anim-button w-0 overflow-hidden text-nowrap'>
                <LinkButton label='Submit Track' href='/' variant='blue' />
              </div>
            </div>
            <div className='bg-white text-[#000] rounded-[53px] shadow-grey md:text-2xl text-[14px] font-PoppinsMed leading-[26px] md:px-10 px-5 md:py-10 py-2 text-center absolute top-[34px] left-[149px] md:w-[314px] w-[240px] overlapping-cards translate-y-10 opacity-0'>
              Make 100% of the money you earn 💰{' '}
            </div>
            <div className='bg-white text-[#000] rounded-[53px] shadow-grey md:text-2xl text-[14px] font-PoppinsMed leading-[26px] md:px-10 px-5 md:py-10 py-2 text-center absolute top-[25%] right-[4%] md:w-[314px] w-[240px] overlapping-cards translate-y-10 opacity-0 z-20'>
              Work directly with your clients 🧑‍🤝‍🧑{' '}
            </div>
            <div className='bg-white text-[#000] rounded-[53px] shadow-grey md:text-2xl text-[14px] font-PoppinsMed leading-[26px] md:px-10 px-5 md:py-10 py-2 text-center absolute bottom-3 right-[10%] md:w-[358px] w-[240px] overlapping-cards translate-y-10 opacity-0'>
            It’s your business, we just amplify it 📢
            </div>
          </div>
        </div>
        <div className='bg-[#B45B5B] opacity-20 w-[666px] max-w-full h-[666px] rounded-full absolute top-0 left-0 -z-10 blur-[200px]'></div>
      </section>
    </>
  );
}

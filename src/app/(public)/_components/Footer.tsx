import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '@/components/logoSVG';
import { footerLinks } from '@/utils/data';
export default function Footer() {
  return (
    <footer className='bg-black lg:h-[188px] lg:px-[100px] px-4 py-7 flex md:flex-row flex-col gap-7 md:gap-0 justify-between items-center'>
      <Link href={'/'}>
        <Logo color='white' width={235} />
      </Link>
      <div className='flex gap-5'>
        {footerLinks.map((link) => {
          return (
            <Link key={link.alt} href={link.href} className='footer-icon translate-x-[-30px] opacity-0'>
              <Image src={link.src} alt={link.alt} width={47} height={51} className='object-contain block md:w-[42px] md:h-[42px] w-6 h-6' />
            </Link>
          );
        })}
      </div>
    </footer>
  );
}

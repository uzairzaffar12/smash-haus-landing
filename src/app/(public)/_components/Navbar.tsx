import LinkButton from '@/interfaces/LinkButton';
import Link from 'next/link';
import { Logo } from '@/components/logoSVG';

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center py-4 md:px-5 px-4 border-b border-[#C9C9C9] gap-4'>
      <Link href={'/'}>
        <Logo color='black' width={235} />
      </Link>
      <div className='sm:w-[220px] w-[130px] button-animate shrink-0 scale-[0.6] opacity-0 [&_svg]:sm:block [&_svg]:hidden'>
        <LinkButton label='Creator Signup' href='https://smash.haus/sign-up' target='_blank' variant='blue' />
      </div>
    </nav>
  );
}

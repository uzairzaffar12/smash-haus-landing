import Link from 'next/link';
import { Logo } from '@/components/logoSVG';
import Button from '@/interfaces/Button';

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center py-4 md:px-5 px-4 border-b border-[#C9C9C9] gap-4' id='navbar'>
      <Link href={'/'}>
        <Logo color='black' width={235} />
      </Link>
      <div className='sm:w-[220px] w-[130px] navbar-btn shrink-0 scale-[0.6] opacity-0 [&_svg]:sm:block [&_svg]:hidden'>
        <Link href={'https://smash.haus/sign-up'} target='_blank'>
          <Button label='Creator Signup' variant='blue' />
        </Link>
      </div>
    </nav>
  );
}

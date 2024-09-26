import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface LinkButtonProps {
  label: string;
  href: string;
  variant: 'blue' | 'white';
  target?: string;
}

const variants = {
  blue: `bg-blue-60 text-white fill-white hover:bg-blue-70`,
  white: `bg-white text-black fill-black hover:bg-gray-50`,
};

export default function LinkButton({ label, href, variant, target }: LinkButtonProps) {
  const classes = `group flex justify-between rounded-full sm:text-[16px] text-[14px] w-full items-center sm:h-[52px] h-11 font-SFProDisplayBold md:px-7 px-4 ${variants[variant]}`;

  return (
    <Link href={href} target={target} className={classes}>
      <span>{label}</span>
      <FontAwesomeIcon icon={faArrowRightLong} size='xl' className='group-hover:translate-x-1 transition-all' />
    </Link>
  );
}

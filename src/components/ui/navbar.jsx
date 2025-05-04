import { Link } from 'react-router-dom';

import { UserCheckIcon } from '@/components/icons/user-check';

const navigation = [
  { name: 'How It Works', href: '#' },
  { name: 'Use Cases', href: '#' },
  { name: 'Client Surprise', href: '#' },
];

export const Navbar = () => {
  return (
    <header className='absolute inset-x-4 top-8 z-50 font-aeonik overflow-hidden'>
      <nav
        aria-label='Global'
        className='flex items-center justify-between relative container-center py-3 h-18 border border-navbar-border rounded-2xl'
      >
        <div className='flex flex-1'>
          <div className='w-[126px] lg:w-[211.5px]'>
            <Link to='/' className='absolute top-3 -left-2 lg:-left-4.5'>
              <span className='sr-only'>Brand Tracker</span>
              <img
                alt=''
                src='/images/logo-brand-tracker.webp'
                className='w-[211.5px] h-auto max-lg:hidden'
              />
              <img
                alt=''
                src='/images/logo-brand-tracker-2.webp'
                className='w-[126px] h-auto lg:hidden'
              />
            </Link>
          </div>
        </div>
        <div className='hidden md:flex gap-x-6'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className='text-base lg:text-lg text-[#F3F3F3]'
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className='flex flex-1 justify-end'>
          <Link
            to='#'
            className='text-base lg:text-lg whitespace-nowrap font-normal text-white inline-flex items-center gap-2.5 p-2 lg:p-2.5 rounded-xl bg-white/16 shadow-[0px_5px_10px_0px_#00000012]'
          >
            <span>Join the waitlist</span>
            <UserCheckIcon />
          </Link>
        </div>
      </nav>
    </header>
  );
};

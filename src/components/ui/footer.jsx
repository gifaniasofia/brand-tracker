import { Link } from 'react-router-dom';

const navigation = {
  main: [
    { name: 'How It Works', href: '#' },
    { name: 'Use Cases', href: '#' },
    { name: 'Client Surprises', href: '#' },
  ],
  social: [
    {
      name: 'X',
      href: '#',
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path d='M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z' />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg
          viewBox='0 0 22 21'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          {...props}
        >
          <path
            d='M10.9975 12.9852C12.4965 12.9852 13.7118 11.77 13.7118 10.2709C13.7118 8.77187 12.4965 7.55664 10.9975 7.55664C9.49843 7.55664 8.2832 8.77187 8.2832 10.2709C8.2832 11.77 9.49843 12.9852 10.9975 12.9852Z'
            fill='currentColor'
          />
          <path
            d='M14.3905 2.12891H7.60479C4.98618 2.12891 2.85547 4.2603 2.85547 6.87958V13.6653C2.85547 16.2839 4.98686 18.4146 7.60615 18.4146H14.3919C17.0105 18.4146 19.1412 16.2832 19.1412 13.6639V6.87823C19.1412 4.25962 17.0098 2.12891 14.3905 2.12891ZM10.9983 14.3432C8.75293 14.3432 6.9269 12.5172 6.9269 10.2718C6.9269 8.02637 8.75293 6.20033 10.9983 6.20033C13.2437 6.20033 15.0698 8.02637 15.0698 10.2718C15.0698 12.5172 13.2437 14.3432 10.9983 14.3432ZM15.7483 6.20033C15.3738 6.20033 15.0698 5.89633 15.0698 5.52176C15.0698 5.14719 15.3738 4.84319 15.7483 4.84319C16.1229 4.84319 16.4269 5.14719 16.4269 5.52176C16.4269 5.89633 16.1229 6.20033 15.7483 6.20033Z'
            fill='currentColor'
          />
        </svg>
      ),
    },
    {
      name: 'Telegram',
      href: '#',
      icon: (props) => (
        <svg
          viewBox='0 0 18 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          {...props}
        >
          <path
            d='M17.5357 0.506844C17.5219 0.443579 17.4916 0.385104 17.4478 0.337387C17.4041 0.289669 17.3484 0.25442 17.2866 0.235237C17.0615 0.190842 16.8286 0.207489 16.6121 0.283451C16.6121 0.283451 1.5923 5.68184 0.734626 6.2797C0.549269 6.40827 0.487661 6.48274 0.457126 6.57113C0.308733 6.99649 0.770519 7.18399 0.770519 7.18399L4.64159 8.44559C4.70698 8.4569 4.7741 8.45286 4.83766 8.43381C5.71838 7.87774 13.6978 2.83881 14.1591 2.66952C14.2314 2.64756 14.285 2.66952 14.2732 2.72309C14.0846 3.36917 7.19373 9.49292 7.1557 9.53041C7.13721 9.54558 7.12268 9.56501 7.11335 9.58703C7.10402 9.60905 7.10016 9.63301 7.10213 9.65684L6.74213 13.4342C6.74213 13.4342 6.59105 14.6127 7.76748 13.4342C8.60159 12.599 9.40195 11.9079 9.8032 11.572C11.1344 12.4908 12.5669 13.507 13.1846 14.0363C13.2883 14.137 13.4111 14.2157 13.5459 14.2678C13.6806 14.3199 13.8245 14.3443 13.9689 14.3395C14.5582 14.317 14.7189 13.6726 14.7189 13.6726C14.7189 13.6726 17.4553 2.66095 17.5475 1.18506C17.5561 1.04042 17.5684 0.947737 17.5694 0.84863C17.5743 0.733681 17.563 0.618618 17.5357 0.506844Z'
            fill='currentColor'
          />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg
          viewBox='0 0 10 17'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          {...props}
        >
          <path
            d='M3.10334 16.3097V9.34542H0.712891V6.13114H3.10334V3.88648C3.10334 1.44137 4.65128 0.238281 6.83249 0.238281C7.87731 0.238281 8.77528 0.316067 9.03697 0.35084V2.90613L7.52419 2.90681C6.33793 2.90682 6.07003 3.47051 6.07003 4.29769V6.13114H9.28432L8.21289 9.34542H6.07003V16.3097H3.10334Z'
            fill='currentColor'
          />
        </svg>
      ),
    },
  ],
};

export const Footer = () => {
  return (
    <footer className='bg-black-1 font-aeonik'>
      <div className='container-center pt-16 pb-5.5 lg:py-18'>
        <div className='flex max-sm:flex-col items-center sm:justify-between pb-6 gap-5.5'>
          <div className='min-w-[211.5px] h-12 relative'>
            <img
              src='/images/logo-brand-tracker.webp'
              alt='logo'
              className='absolute -left-11 top-0 w-[211.5px] h-auto'
            />
          </div>
          <nav
            aria-label='Footer'
            className='w-full flex items-center justify-between sm:justify-end sm:gap-x-11 gap-y-3 text-sm/8'
          >
            {navigation.main.map((item) => (
              <Link key={item.name} to={item.href} className='text-[#E2E2E2]'>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className='sm:flex sm:items-center sm:justify-between py-6 border-t border-white/15'>
          <div className='flex justify-center gap-x-5.5 lg:gap-x-8 sm:order-2'>
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-white rounded-full bg-[#FFF9F62B] size-10 relative'
              >
                <span className='sr-only'>{item.name}</span>
                <item.icon
                  aria-hidden='true'
                  className='size-4.5 absolute-center'
                />
              </a>
            ))}
          </div>
          <p className='mt-3 text-center text-sm/6.75 text-[#E2E2E2] sm:order-1 sm:mt-0'>
            BrandTracker 2025. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

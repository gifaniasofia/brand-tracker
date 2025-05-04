import { Link } from 'react-router-dom';

import { ArrowLongRightIcon } from '@/components/icons/arrow-long-right';
import { StarIcon } from '@/components/icons/star';

import { BoltIcon } from '../../components/icons/bolt';

const avatars = [
  '/images/hero-rating-1.webp',
  '/images/hero-rating-2.webp',
  '/images/hero-rating-3.webp',
  '/images/hero-rating-4.webp',
  '/images/hero-rating-5.webp',
];

const features = [
  'Reveal your weak points',
  'Track rising star competitors',
  'Look past ad accounts',
];

export const Hero = () => {
  return (
    <div className='relative isolate overflow-hidden bg-black-1 pt-26 font-aeonik font-normal'>
      <div className='container-center pt-15 lg:pt-20 pb-23'>
        <div className='mb-4.5 flex justify-center'>
          <div className='flex items-center gap-2'>
            <div className='z-10 flex -space-x-2.5 rtl:space-x-reverse'>
              {avatars.map((url, index) => (
                <div key={index}>
                  <img
                    className='size-9.25 rounded-full border-2 border-black shrink-0'
                    src={url}
                    width={40}
                    height={40}
                    alt={`Avatar ${index + 1}`}
                  />
                </div>
              ))}
            </div>

            <div className='space-y-1.5 sm:space-y-1.75'>
              <div className='flex items-center gap-1'>
                {Array.from(new Array(5)).map((_, i) => (
                  <div key={i} className='shrink-0'>
                    <StarIcon />
                  </div>
                ))}
              </div>

              <p className='text-sm/5 text-[#EBEBEB]'>
                50+ B2B startups love us
              </p>
            </div>
          </div>
        </div>
        <div className='text-center'>
          <h1 className='text-balance text-4xl/snug font-bold text-white lg:text-[74px]/20'>
            Market-Share Data, Weaponized For B2B Growth
          </h1>
          <p className='mt-4.5 text-lg/snug text-gray lg:text-2xl/[35px] max-w-[792px] mx-auto'>
            BrandTracker compares your market penetration & consideration to
            your competitors across the use-cases you care most about
          </p>
          <div className='mt-8.5 hidden-scrollbar overflow-x-auto flex-nowrap gap-[68px] flex items-center lg:justify-between max-lg:-mx-4 lg:max-w-[884px] lg:mx-auto'>
            {features.map((feature) => (
              <div
                key={feature}
                className='whitespace-nowrap max-sm:w-screen flex flex-none justify-center px-4'
              >
                <div className='flex items-center gap-2'>
                  <span className='shrink-0'>
                    <BoltIcon />
                  </span>
                  <span className='text-lg/snug lg:text-xl/[35px] text-gray'>
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className='mt-16 flex items-center justify-center'>
            <Link
              href='#'
              className='inline-flex group h-14 items-center gap-3 rounded-xl bg-orange px-14 py-4 text-xl/[1.6] text-white shadow-[0px_35px_53px_rgba(244,77,4,0.16),_0px_7px_21px_rgba(244,77,4,0.32),_0px_2px_0px_#BF3600]'
            >
              Book a Demo{' '}
              <span className='group-hover:translate-x-2 transition-all duration-200 ease-in-out'>
                <ArrowLongRightIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

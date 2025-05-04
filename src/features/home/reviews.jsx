import { StarIcon } from '@/components/icons/star';
import { Carousel } from '@/components/ui/carousel';

const Slide = ({ text, user }) => {
  return (
    <div
      style={{
        background:
          'radial-gradient(84.86% 289.18% at 50% 50%, rgba(19, 22, 30, 0.94) 0%, rgba(48, 46, 46, 0.94) 100%)',
      }}
      className='relative flex flex-col lg:justify-between p-8 lg:p-10 xl:p-16 backdrop-blur-[22.45px] rounded-[36px] isolate lg:min-h-[541px] shadow-[4px_14px_31px_rgba(0,7,31,0.1),_14px_54px_56px_rgba(0,8,31,0.09)]'
    >
      <h4
        className='bg-clip-text text-transparent text-[22px]/snug lg:text-3xl/snug xl:text-[44px]/snug font-aeonik font-normal'
        style={{
          background:
            'radial-gradient(43% 228.3% at 50% 60.65%, #FFFFFF 0%, rgba(255, 255, 255, 0.73) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {text}
      </h4>

      <div className='mt-5.5 lg:mt-21 flex items-center'>
        <div className='flex shrink-0 mr-4 lg:mr-4.5'>
          <img
            src={user?.image}
            alt={user?.name}
            className='size-14.5 lg:size-20 rounded-full object-cover overflow-hidden'
          />
        </div>
        <div className='space-y-2'>
          <p className='text-lg/snug lg:text-2xl/snug -tracking-tightest text-white/70'>
            {user?.name}
          </p>
          <div className='flex items-center gap-1'>
            {Array.from(new Array(user?.rating)).map((_, i) => (
              <div key={i} className='shrink-0'>
                <StarIcon />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='absolute right-11 bottom-11 max-lg:hidden -z-10'>
        <img
          alt=''
          src='/images/inverted-comma.webp'
          className='w-[241px] h-auto'
        />
      </div>
    </div>
  );
};

const slides = [
  {
    content: (
      <Slide
        text='BrandTracker helped us uncover insights we didn’t even know we needed. Now we have the clarity we needed to improve our strategy and drive better results.'
        user={{
          name: 'Esther Jackson',
          rating: 5,
          image: '/images/review-esther.webp',
        }}
      />
    ),
  },
  {
    content: (
      <Slide
        text='BrandTracker helped us uncover insights we didn’t even know we needed. Now we have the clarity we needed to improve our strategy and drive better results.'
        user={{
          name: 'Esther Jackson',
          rating: 5,
          image: '/images/review-esther.webp',
        }}
      />
    ),
  },
  {
    content: (
      <Slide
        text='BrandTracker helped us uncover insights we didn’t even know we needed. Now we have the clarity we needed to improve our strategy and drive better results.'
        user={{
          name: 'Esther Jackson',
          rating: 5,
          image: '/images/review-esther.webp',
        }}
      />
    ),
  },
];

export const Reviews = () => {
  return (
    <div className='bg-background-light-gray py-16 lg:py-31.25 space-y-5.5 lg:space-y-11'>
      <div className='container-center'>
        <h2 className='max-sm:max-w-[350px] max-sm:mx-auto text-3xl/[1.2] lg:text-5xl/snug text-black-3 text-center font-semibold'>
          What Others are Saying About Us
        </h2>
      </div>
      <Carousel
        slides={slides}
        options={{ loop: true }}
        wrapperClassName='-ml-5 sm:-ml-11'
        className='pl-5 sm:pl-11 flex-[0_0_90%] sm:flex-[0_0_70%]'
        withButtons
      />
    </div>
  );
};

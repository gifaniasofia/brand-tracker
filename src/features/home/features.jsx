import { FeaturesLine } from '@/components/icons/features-line';
import { cn } from '@/lib/utils';

const features = [
  {
    image: '/images/feature-1.webp',
    title: 'Identify Gaps',
    desc: 'Identify areas where your brand is underperforming, like verticals with low awareness, and take action.',
  },
  {
    image: '/images/feature-2.webp',
    title: 'Monitor Competitors',
    desc: 'Spot emerging competitors gaining market share and uncover the strategies driving their success.',
  },
  {
    image: '/images/feature-3.webp',
    title: 'Real-World Insights',
    desc: 'Go beyond your ads to reveal the real-world data that’s influencing your results.',
  },
];

export const Features = () => {
  return (
    <div className='bg-[linear-gradient(360deg,_#FFFFFF_51.58%,_#13161E_51.58%)] w-full relative overflow-hidden'>
      <div className='pt-11 lg:pt-16 pb-16 lg:pb-30 container-center'>
        <div className='relative z-20 px-5 pt-11 pb-16 lg:pt-16 lg:px-10 xl:px-16 bg-white shadow-[4px_14px_31px_rgba(0,7,31,0.1),_14px_54px_56px_rgba(0,8,31,0.09)] rounded-[36px] flex flex-col items-center justify-center gap-11'>
          <h2 className='font-semibold text-3xl/[1.2] lg:text-4xl/snug max-w-[306px] sm:max-w-[500px] mx-auto text-center'>
            Unlock Key Insights to Drive Your B2B Growth
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5.5 lg:gap-8.5 w-full'>
            {features.map((feature, featureIdx) => (
              <div
                key={feature.title}
                className={cn(
                  'min-h-[436.56px] lg:min-h-[423px] w-full',
                  featureIdx === 1 ? 'py-0' : 'lg:py-5'
                )}
              >
                <div
                  className={cn(
                    'size-full p-5.5 bg-white rounded-3xl border',
                    'shadow-[0px_16px_32px_rgba(41,37,36,0.01),_0px_12px_24px_rgba(41,37,36,0.01),_0px_8px_16px_rgba(41,37,36,0.02),_0px_6px_12px_rgba(41,37,36,0.02),_0px_4px_8px_rgba(41,37,36,0.02),_0px_2px_4px_rgba(41,37,36,0.02),_0px_1px_2px_rgba(41,37,36,0.02),_0px_1px_1px_-0.5px_rgba(41,37,36,0.04)]',
                    {
                      ['border-[#FFF7F2]']: featureIdx === 0,
                      ['border-[#F5F8FF]']: featureIdx === 1,
                      ['border-[#EDFCF3]']: featureIdx === 2,
                    }
                  )}
                >
                  <div
                    className={cn(
                      'size-full relative rounded-[20px] py-5.5 border-b flex flex-col justify-end',
                      {
                        ['bg-[linear-gradient(180deg,_#FFFCFC_0%,_#FFF1E8_100%)] border-[#FFCFB3]']:
                          featureIdx === 0,
                        ['bg-[linear-gradient(180deg,_#FCFDFF_0%,_#F0F3FF_100%)] border-[#93AAEA]']:
                          featureIdx === 1,
                        ['bg-[linear-gradient(180deg,_#FAFFFC_0%,_#EDFFF3_100%)] border-[#6EBE89]']:
                          featureIdx === 2,
                      }
                    )}
                  >
                    <div
                      className={cn(
                        'flex justify-center absolute inset-x-0',
                        featureIdx === 1 ? 'top-3' : 'top-5.5'
                      )}
                    >
                      <img
                        src={feature.image}
                        alt=''
                        className={cn(
                          'h-auto w-full',
                          featureIdx === 2 ? 'px-1 lg:px-8' : ''
                        )}
                      />
                    </div>
                    <div className='px-5.5 relative z-10 space-y-2'>
                      <h3 className='text-black font-semibold text-[22px]/snug lg:text-2xl -tracking-tightest'>
                        {feature.title}
                      </h3>
                      <p className='text-black-2/70 text-lg/snug lg:text-xl/snug font-aeonik font-normal'>
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='absolute max-md:left-[60%] max-md:-translate-x-[60%] md:left-0 md:right-0 max-md:-top-35 md:bottom-16'>
        <FeaturesLine className='w-[1687px] max-md:h-[817px] md:w-full max-md:-rotate-[20.28deg]' />
      </div>
    </div>
  );
};

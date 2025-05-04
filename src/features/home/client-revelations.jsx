import { ArrowDownDoubleIcon } from '@/components/icons/arrow-down-double';
import { Mesh } from '@/components/icons/mesh';
import { cn } from '@/lib/utils';

const steps = [
  {
    title:
      '“Our problem is not what we thought it was… and our problems differ by vertical”',
    desc: '“We thought we had an awareness problem… in reality our awareness and consideration are high and the kink in our funnel is just getting customers across that last hurdle to purchase.”',
    image: '/images/client-1.webp',
  },
  {
    title: '“We were blind to our biggest opportunities”',
    desc: '“...We thought E-Commerce was our best vertical because we have the most customers there, but due to the size of the vertical we are actually significantly under performing in E-Commerce!”',
    image: '/images/client-2.webp',
  },
  {
    title: '“We were focused on the wrong competition”',
    desc: '“...We had an idea who the biggest companies were in our space, and we thought they were our biggest concern.\n\nAlternatively, we identified threats from newer entrants who were flying under our radar, but our initial survey results allowed us to not only identify them as threats, but also allowed us to see why/where they were winning and learn from their wins”',
    image: '/images/client-3.webp',
  },
];

export const ClientRevelations = () => {
  return (
    <div className='container-center'>
      <div className='bg-black-1 w-full rounded-[36px] py-31.25 p-5 lg:py-16 lg:px-10 xl:px-16 relative'>
        <div className='relative z-10'>
          <div className='text-center space-y-2 flex flex-col items-center relative'>
            <div className='absolute bottom-28 lg:bottom-23'>
              <img
                src='/images/pin.webp'
                alt=''
                className='w-[90.85px] h-auto'
              />
            </div>
            <h2
              className='font-semibold bg-clip-text text-transparent text-3xl/[1.2] lg:text-5xl/snug'
              style={{
                background:
                  'radial-gradient(43% 228.3% at 50% 60.65%, #FFFFFF 0%, rgba(255, 255, 255, 0.73) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Client Revelations
            </h2>
            <p className='text-white/70 max-w-[518px] mx-auto font-aeonik font-light text-[22px]/[1.2] lg:text-[28px]/snug'>
              3 Common surprises clients face when they start working with ws
            </p>
          </div>

          <div className='space-y-10 mt-11'>
            {steps.map((step, stepIdx) => (
              <div
                key={step.title}
                className='p-2 rounded-[30px] border-[1.2px] border-[#444852]/6'
              >
                <div
                  className='px-2.5 py-8 lg:px-10 xl:p-16 backdrop-blur-sm rounded-[28px] border-[1.2px] bg-green-300'
                  style={{
                    background:
                      'linear-gradient(80.42deg, rgba(0, 0, 0, 0.16) 25.25%, rgba(83, 84, 108, 0.16) 98.05%)',
                    borderImageSlice: 1,
                    borderImageRepeat: 'stretch',
                    borderImageSource:
                      'linear-gradient(266.19deg, rgba(16, 17, 50, 0.6) -4.37%, rgba(247, 211, 119, 0) 100.99%)',
                  }}
                >
                  <div className='flex max-lg:flex-col-reverse items-center lg:items-start gap-8 lg:gap-5'>
                    <div className='flex gap-2.25 lg:gap-5'>
                      <div className='flex flex-col items-center'>
                        <div
                          className={cn(
                            'size-7 lg:size-10 rounded-full relative shrink-0',
                            {
                              ['bg-[radial-gradient(62.42%_80.11%_at_52.55%_31.51%,_#FF9255_5.54%,_#FF7537_48.2%,_#FF5C00_78.51%)]']:
                                stepIdx === 0,
                              ['bg-[radial-gradient(62.42%_80.11%_at_52.55%_31.51%,_#5197FF_5.54%,_#005BE2_48.2%,_#0335E6_78.51%)]']:
                                stepIdx === 1,
                              ['bg-[radial-gradient(62.42%_80.11%_at_52.55%_31.51%,_#26C326_5.54%,_#16A616_48.2%,_#098709_78.51%)]']:
                                stepIdx === 2,
                            }
                          )}
                        >
                          <ArrowDownDoubleIcon className='absolute-center size-4.25 lg:size-6' />
                        </div>
                        <div className='w-[2.4px] h-full relative'>
                          <div
                            className={cn('absolute inset-0 blur-sm', {
                              ['bg-[#F93939]']: stepIdx === 0,
                              ['bg-[#225EF7]']: stepIdx === 1,
                              ['bg-[#0D8C0D]']: stepIdx === 2,
                            })}
                          />
                          <div
                            className={cn(
                              'absolute inset-0 z-10 shadow-[inset_0px_4px_10px_rgba(0,0,0,0.25)]',
                              {
                                ['bg-[linear-gradient(180deg,_#F98A39_15.09%,_rgba(249,138,57,0)_99.6%)]']:
                                  stepIdx === 0,
                                ['bg-[linear-gradient(180deg,_#0064FA_15.89%,_rgba(30,33,233,0)_104.9%,_rgba(30,33,233,0)_104.9%)]']:
                                  stepIdx === 1,
                                ['bg-[linear-gradient(180deg,_#16A616_15.15%,_rgba(22,166,22,0)_100%,_rgba(22,166,22,0)_100%)]']:
                                  stepIdx === 2,
                              }
                            )}
                          />
                        </div>
                      </div>
                      <div className='max-w-[340px] space-y-3.5 lg:space-y-6'>
                        <h3 className='text-white text-[22px]/[1.4] lg:text-2xl/10 -tracking-tightest'>
                          {step.title}
                        </h3>
                        <p className='font-aeonik font-normal text-white/70 text-lg/snug'>
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    <div className='flex justify-end'>
                      <img
                        src={step.image}
                        alt=''
                        className='w-full lg:w-auto h-auto lg:h-[355px] object-cover'
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='absolute top-0 inset-x-0 w-full'>
          <Mesh className='w-full h-[506px]' />
        </div>
      </div>
    </div>
  );
};

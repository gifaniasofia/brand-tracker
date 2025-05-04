export const Banner = () => {
  return (
    <div className='bg-background-light-gray py-16 lg:py-45.5 rounded-b-4xl lg:rounded-b-[36px]'>
      <div className='container-center'>
        <div className='rounded-[26px] pb-11 lg:py-15.5 px-5 w-full flex max-lg:flex-col items-center bg-[radial-gradient(62.42%_80.11%_at_52.55%_31.51%,_#FF9255_5.54%,_#FF7537_48.2%,_#FF5C00_78.51%)]'>
          <div className='lg:max-w-[671px] max-lg:-mx-1 flex max-lg:justify-center lg:flex-1 lg:h-[192px] w-full relative'>
            <div className='shrink-0 lg:absolute lg:-left-33 lg:-top-full relative -left-1/12 sm:-left-5'>
              <img
                src='/images/graphics.webp'
                alt=''
                className='h-auto lg:h-[671px] w-screen sm:w-[600px] lg:w-auto'
              />
            </div>
          </div>
          <div className='max-w-[310px] lg:max-w-[447px] mx-auto lg:px-5'>
            <div className='relative w-full'>
              <h4
                className='max-lg:text-center font-semibold text-[26px]/[1.2] lg:text-[34px]/snug bg-clip-text text-transparent'
                style={{
                  background:
                    'radial-gradient(43% 228.3% at 50% 60.65%, #FFFFFF 0%, rgba(255, 255, 255, 0.73) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Track Your Awareness & Consideration Over Time. Use it to make
                <br />
                big moves.
              </h4>

              <span
                aria-hidden='true'
                className='absolute left-1/2 max-lg:-translate-x-1/2 lg:left-0 -bottom-3 lg:-bottom-2 z-0 bg-[#FFDA2C] w-[151.96px] lg:w-[190.4px] -rotate-[1.3deg] rounded-[4.31px] h-[6.89px] lg:h-[8.63px]'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

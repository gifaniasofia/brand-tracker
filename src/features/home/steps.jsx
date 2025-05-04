import { BoltIcon } from '@/components/icons/bolt';
import { CheckBoldIcon } from '@/components/icons/check-bold';
import { SealCheckIcon } from '@/components/icons/seal-check';
import { XCircleFillIcon } from '@/components/icons/x-circle-fill';
import { Accordion, AccordionIcon } from '@/components/ui/accordion';
import { Carousel } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

const steps = [
  {
    title: 'Day 1',
    desc: 'Customize research objectives with our data scientists',
    content: () => {
      const list = [
        'Reveal your weak points',
        'Track rising star competitors',
        'Look past ad accounts',
        'Reveal your weak points',
        'Track rising star competitors',
        'Look past ad accounts',
      ];
      const summaries = [
        {
          name: 'Total Client',
          value: '256',
        },
        {
          name: 'Total Revenue',
          value: '$256K',
        },
        {
          name: 'Total Review',
          value: '200',
        },
      ];

      return (
        <div className='space-y-5.5 lg:space-y-8.5'>
          <h5 className='font-semibold text-[22px]/snug lg:text-2xl/snug -tracking-tightest'>
            Objectives
          </h5>
          <div className='lg:grid lg:grid-cols-[1fr_410px] lg:gap-11.5'>
            <div className='flex max-md:flex-col md:grid md:grid-cols-2 md:gap-x-11.5 gap-y-3'>
              {list.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className='flex items-center gap-2.5 font-aeonik'
                >
                  <BoltIcon className='text-black shrink-0' />
                  <span className='text-xl text-black-2/70'>{item}</span>
                </div>
              ))}
            </div>
            <div className='hidden lg:flex'>
              <div
                className='rounded-[20px] py-7.5 px-5 flex justify-between w-full gap-8'
                style={{
                  boxShadow:
                    '0px 16px 32px rgba(41, 37, 36, 0.01), 0px 12px 24px rgba(41, 37, 36, 0.01), 0px 8px 16px rgba(41, 37, 36, 0.02), 0px 6px 12px rgba(41, 37, 36, 0.02), 0px 4px 8px rgba(41, 37, 36, 0.02), 0px 2px 4px rgba(41, 37, 36, 0.02), 0px 1px 2px rgba(41, 37, 36, 0.02), 0px 1px 1px -0.5px rgba(41, 37, 36, 0.04)',
                }}
              >
                {summaries.map((summary, summaryIdx) => (
                  <div
                    key={summary.name}
                    className='flex flex-col items-center text-center'
                  >
                    <span
                      className={cn(
                        'text-3xl/[1.59] font-semibold',
                        summaryIdx === 1 ? 'text-[#249F58]' : 'text-[#474650]'
                      )}
                    >
                      {summary.value}
                    </span>
                    <span className='relative inline-block'>
                      <span className='relative text-lg/[1.59] text-[#474650]/70 font-aeonik'>
                        {summary.name}
                      </span>
                      <span className='absolute -bottom-2 inset-x-0 h-2 rounded-[5px] bg-[#9FB6B24F]' />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    title: 'Day 2-14',
    desc: 'Data collection from decision makers in your market',
    content: () => {
      const users = [
        {
          name: 'Jacob J. Jacobson',
          image: '/images/step-2-user-1.webp',
          color: '#249F58',
          backgroundColor: '#DFFFEC',
          details: {
            value: '10X',
            label: 'Average service price increase',
          },
        },
        {
          name: 'Jake Reid',
          image: '/images/step-2-user-2.webp',
          color: '#2E71F5',
          backgroundColor: '#DFF7FF',
          details: {
            value: '15X',
            label: 'Average service price increase',
          },
        },
        {
          name: 'Tom Hale',
          image: '/images/step-2-user-3.webp',
          color: '#FF5C00',
          backgroundColor: '#FFF0E2',
          details: {
            value: '7%',
            label: 'Average service price increase',
          },
        },
        {
          name: 'Lisa More',
          image: '/images/step-2-user-4.webp',
          color: '#FF5C00',
          backgroundColor: '#FFF0E2',
          details: {
            value: '15%',
            label: 'Average service price increase',
          },
        },
        {
          name: 'Josh Green',
          image: '/images/step-2-user-5.webp',
          color: '#249F58',
          backgroundColor: '#DFFFEC',
          details: {
            value: '2X',
            label: 'Average service price increase',
          },
        },
        {
          name: 'Nuala Hall',
          image: '/images/step-2-user-6.webp',
          color: '#2E71F5',
          backgroundColor: '#DFF7FF',
          details: {
            value: '15X',
            label: 'Average service price increase',
          },
        },
        {
          name: 'Jacob J. Jacobson',
          image: '/images/step-2-user-1.webp',
          color: '#249F58',
          backgroundColor: '#DFFFEC',
          details: {
            value: '10X',
            label: 'Average service price increase',
          },
        },
      ];
      const mid = Math.ceil(users.length / 2);

      const firstHalf = users.slice(0, mid);
      const secondHalf = users.slice(mid - 1);

      const renderItem = (user) => {
        return (
          <div
            className='rounded-[20px] flex flex-col justify-between gap-6.25 w-full sm:w-[311px] select-none'
            style={{
              boxShadow:
                '0px 16px 32px rgba(41, 37, 36, 0.01), 0px 12px 24px rgba(41, 37, 36, 0.01), 0px 8px 16px rgba(41, 37, 36, 0.02), 0px 6px 12px rgba(41, 37, 36, 0.02), 0px 4px 8px rgba(41, 37, 36, 0.02), 0px 2px 4px rgba(41, 37, 36, 0.02), 0px 1px 2px rgba(41, 37, 36, 0.02), 0px 1px 1px -0.5px rgba(41, 37, 36, 0.04)',
            }}
          >
            <div className='pt-3 px-3 flex items-center gap-3 sm:gap-4'>
              <div className='shrink-0'>
                <img
                  src={user.image}
                  alt=''
                  className='object-cover size-11 sm:size-16 rounded-full'
                  style={{
                    boxShadow:
                      '0px 10.8936px 21.7872px rgba(41, 37, 36, 0.01), 0px 8.17021px 16.3404px rgba(41, 37, 36, 0.01), 0px 5.44681px 10.8936px rgba(41, 37, 36, 0.02), 0px 4.08511px 8.17021px rgba(41, 37, 36, 0.02), 0px 2.7234px 5.44681px rgba(41, 37, 36, 0.02), 0px 1.3617px 2.7234px rgba(41, 37, 36, 0.02), 0px 0.680851px 1.3617px rgba(41, 37, 36, 0.02), 0px 0.680851px 0.680851px -0.340426px rgba(41, 37, 36, 0.04)',
                  }}
                />
              </div>
              <div>
                <h6 className='text-black-2 text-lg sm:text-[20px]'>
                  {user.name}
                </h6>
                <div className='flex items-center gap-1'>
                  <SealCheckIcon classNames='size-4 shrink-0' />
                  <span className='text-xs/[1.2] text-black-2/70'>
                    VERIFIED LINKEDIN
                  </span>
                </div>
              </div>
            </div>
            <div
              className='px-3 h-16.75 sm:h-10 flex items-center justify-center w-full rounded-b-[20px]'
              style={{
                background: `linear-gradient(90deg, #FFFFFF 0%, ${user.backgroundColor} 100%)`,
              }}
            >
              <div className='flex items-center gap-2.5 sm:gap-2'>
                <div className='flex items-center gap-1.25 sm:gap-1.5'>
                  <BoltIcon
                    className='shrink-0 w-5.5 h-7 sm:w-4.25 sm:h-5.5'
                    style={{ color: user.color }}
                  />
                  <span className='text-2xl/normal sm:text-[20px] -tracking-tightest font-semibold'>
                    {user.details.value}
                  </span>
                </div>
                <span className='font-aeonik text-sm/[1.2] sm:text-base text-black-2/70 sm:whitespace-nowrap'>
                  {user.details.label}
                </span>
              </div>
            </div>
          </div>
        );
      };

      return (
        <div className='flex flex-col -m-8.5 max-sm:h-[581px] relative'>
          <div className='hidden sm:flex items-center gap-x-8 overflow-x-auto flex-nowrap hidden-scrollbar py-8.5'>
            {firstHalf.map((user, userIdx) => (
              <div key={userIdx} className='first:pl-8 last:pr-8'>
                {renderItem(user)}
              </div>
            ))}
          </div>
          <div className='hidden sm:flex items-center gap-x-8 overflow-x-auto flex-nowrap hidden-scrollbar py-8.5 -mt-8.5'>
            {secondHalf.map((user, userIdx) => (
              <div key={userIdx} className='first:pl-8 last:pr-8'>
                {renderItem(user)}
              </div>
            ))}
          </div>
          <div className='flex flex-col sm:hidden items-center overflow-y-auto hidden-scrollbar'>
            {users.map((user, userIdx) => (
              <div key={userIdx} className='first:mt-4 last:mb-4 py-4'>
                {renderItem(user)}
              </div>
            ))}
          </div>
          <div className='rounded-b-[20px] sm:hidden absolute -bottom-0.5 left-0 w-full h-[131px] bg-[linear-gradient(180deg,_rgba(255,255,255,0)_0%,_#ffffff_100%)] pointer-events-none' />
          <div className='max-sm:hidden rounded-r-[20px] absolute inset-y-0 right-0 w-[200px] h-full bg-[linear-gradient(90deg,_rgba(255,255,255,0)_0%,_#ffffff_100%)] pointer-events-none' />
        </div>
      );
    },
  },
  {
    title: 'Day 15-90',
    desc: 'Execute on new marketing initiatives with clarity',
    content: () => {
      const oldGameList = [
        'Focused on vertical where there are little marginal gains',
        'Over-indexed on awareness, at the expense of consideration',
        'Constant vertical switching',
      ];
      const newGameList = [
        'Captures the lowest hanging fruit',
        'Prioritizes the funnel-stages which will have the great impact',
        'One app for segmentation',
      ];

      return (
        <div className='font-aeonik text-lg/snug lg:text-xl/snug text-black-2/70 space-y-8.5'>
          <p className='max-w-[736px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            rutrum congue felis. nec commodo lectus dignissim eu.
          </p>

          <div className='lg:grid lg:grid-cols-2'>
            <div>
              <h4 className='pb-3 max-lg:text-center font-sora font-semibold -tracking-tightest text-2xl'>
                Old Game Plan
              </h4>
              <div
                className='w-full h-px'
                style={{
                  background:
                    'linear-gradient(270deg, #FFD9C3 41.65%, rgba(180, 155, 141, 0.33) 61.2%, rgba(9, 8, 8, 0.05) 89.04%)',
                }}
              />
              <div className='px-3 py-8.5 w-full space-y-3'>
                {oldGameList.map((game) => (
                  <div key={game} className='flex items-center gap-2'>
                    <div className='shrink-0'>
                      <XCircleFillIcon />
                    </div>
                    <span>{game}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className='rounded-[25px] p-px'
              style={{
                background:
                  'radial-gradient(50% 174.13% at 50% 50%, rgba(255, 92, 0, 0.4) 0%, rgba(255, 92, 0, 0.236) 100%)',
              }}
            >
              <div className='bg-white rounded-3xl p-3 size-full'>
                <div className='pb-3 flex max-lg:flex-col max-lg:text-center items-center gap-2 lg:gap-2.5 text-orange font-sora font-semibold -tracking-tightest text-2xl'>
                  <BoltIcon className='w-4.25 h-5.5 text-orange' />
                  <h4>New Game Plan</h4>
                </div>
                <div
                  className='rounded-[20px] p-5.5 lg:p-8.5 space-y-3'
                  style={{
                    boxShadow:
                      '0px 16px 32px rgba(41, 37, 36, 0.01), 0px 12px 24px rgba(41, 37, 36, 0.01), 0px 8px 16px rgba(41, 37, 36, 0.02), 0px 6px 12px rgba(41, 37, 36, 0.02), 0px 4px 8px rgba(41, 37, 36, 0.02), 0px 2px 4px rgba(41, 37, 36, 0.02), 0px 1px 2px rgba(41, 37, 36, 0.02), 0px 1px 1px -0.5px rgba(41, 37, 36, 0.04)',
                  }}
                >
                  {newGameList.map((game) => (
                    <div key={game} className='flex items-center gap-2'>
                      <div className='shrink-0'>
                        <CheckBoldIcon />
                      </div>
                      <span className='text-black-2'>{game}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    title: 'Day 90',
    desc: 'Re-run analysis',
    content: () => {
      const images = [
        '/images/aided-awareness.webp',
        '/images/consideration-over.webp',
        '/images/market-share.webp',
      ];

      return (
        <div className='space-y-8.5'>
          <p className='text-lg/snug lg:text-xl text-black-2/70'>
            Validate your marketing efforts are shaping your market to your
            liking
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5.5 lg:gap-8.5'>
            {images.map((src, srcIdx) => (
              <div key={srcIdx} className='w-full'>
                <img
                  src={src}
                  alt=''
                  className='w-full h-auto object-contain'
                />
              </div>
            ))}
          </div>
        </div>
      );
    },
  },
];

export const Steps = () => {
  return (
    <div className='container-center py-23 lg:py-31.25 space-y-11 lg:space-y-16'>
      <h2 className='text-4xl/snug lg:text-[64px]/snug text-black-3 text-center font-bold max-w-[868px] mx-auto'>
        What the 90 Days After Signing Up Look Like
      </h2>
      <div className='w-full'>
        {steps.map((step, index) => (
          <Accordion
            key={step.title}
            trigger={
              <span className='w-full flex max-lg:flex-col lg:items-center lg:grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-20'>
                <span className='lg:col-span-4 flex items-center gap-6'>
                  <span className='bg-white text-orange size-11 lg:size-16.5 rounded-full flex items-center justify-center font-semibold text-center text-[21px]/[1.2] lg:text-[31px]/[1.2] -tracking-tightest shadow-[0px_6.6px_13.2px_rgba(0,0,0,0.07)]'>
                    {index + 1}
                  </span>
                  <h4 className='text-[26px]/[1.2] lg:text-[34px]/[1.2] tracking-[0.078em] font-semibold'>
                    {step.title}
                  </h4>
                </span>
                <span className='lg:col-span-8 group-data-open:font-semibold text-[22px]/snug lg:text-2xl/snug -tracking-tightest flex items-center max-lg:justify-between max-lg:gap-3'>
                  {step.desc}

                  <span className='lg:hidden size-6 shrink-0'>
                    <AccordionIcon />
                  </span>
                </span>
              </span>
            }
          >
            <div className='rounded-3xl box-border border border-[#FFF7F2] p-8.5 shadow-[0px_16px_32px_rgba(41,37,36,0.01),_0px_12px_24px_rgba(41,37,36,0.01),_0px_8px_16px_rgba(41,37,36,0.02),_0px_6px_12px_rgba(41,37,36,0.02),_0px_4px_8px_rgba(41,37,36,0.02),_0px_2px_4px_rgba(41,37,36,0.02),_0px_1px_2px_rgba(41,37,36,0.02),_0px_1px_1px_-0.5px_rgba(41,37,36,0.04)]'>
              <step.content />
            </div>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

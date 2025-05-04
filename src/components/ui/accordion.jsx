import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';

export const AccordionIcon = (props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='text-[#F93939]'
      {...props}
    >
      <path d='M3.24023 12H21.2402' stroke='currentColor' strokeWidth='2' />
      <path
        d='M12.2402 3L12.2402 21'
        stroke='currentColor'
        strokeWidth='2'
        className='group-data-open:opacity-0 transition-all duration-100 opacity-100'
      />
    </svg>
  );
};

export const Accordion = ({ trigger, children }) => {
  return (
    <Disclosure as='div' className='w-full'>
      <DisclosureButton className='group w-full'>
        <div className='w-full py-11 px-5 lg:px-11 xl:px-16 text-left border-t-2 border-[#F5F5F5] rounded-t-[26px] flex items-center justify-between gap-3 group-data-open:bg-[linear-gradient(0deg,_rgba(250,250,250,0))] bg-[linear-gradient(180deg,_rgba(249,249,249,0.74)_0%,_#FFFFFF_48.66%)]'>
          {trigger}

          <span className='max-lg:hidden'>
            <AccordionIcon />
          </span>
        </div>
      </DisclosureButton>
      <DisclosurePanel
        transition
        className='origin-top transition duration-200 ease-in-out data-closed:-translate-y-6 data-closed:opacity-0 data-open:pb-11 data-open:lg:pb-16'
      >
        {children}
      </DisclosurePanel>
    </Disclosure>
  );
};

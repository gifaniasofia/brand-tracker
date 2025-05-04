export const PrevButton = ({ children, ...restProps }) => {
  return (
    <button
      className='size-9.25 lg:size-10 rounded-[27px] flex items-center justify-center bg-orange disabled:text-[#707070] text-white disabled:bg-white disabled:border-[#707070] border-[1.27px] border-orange'
      type='button'
      {...restProps}
    >
      <svg
        width='18'
        height='13'
        viewBox='0 0 18 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M16.9386 6.56492L1.38829 6.57013M1.38829 6.57013L6.94012 1.01458M1.38829 6.57013L6.94384 12.122'
          stroke='currentColor'
          strokeWidth='1.26743'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>

      {children}
    </button>
  );
};

export const NextButton = ({ children, ...restProps }) => {
  return (
    <button
      className='size-9.25 lg:size-10 rounded-[27px] flex items-center justify-center bg-orange disabled:text-[#707070] text-white disabled:bg-white disabled:border-[#707070] border-[1.27px] border-orange'
      type='button'
      {...restProps}
    >
      <svg
        width='18'
        height='13'
        viewBox='0 0 18 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1.06137 6.56492L16.6117 6.57013M16.6117 6.57013L11.0599 1.01458M16.6117 6.57013L11.0562 12.122'
          stroke='currentColor'
          strokeWidth='1.26743'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      {children}
    </button>
  );
};

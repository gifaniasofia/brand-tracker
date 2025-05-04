export const FeaturesLine = (props) => {
  return (
    <svg
      viewBox='0 0 1440 995'
      width='100%'
      height='100%'
      preserveAspectRatio='xMidYMid meet'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g filter='url(#filter0_d_31_547)'>
        <path
          d='M1564.72 1.86681C1627.53 127.282 1412.15 551.903 1157.54 464.233C809.13 344.259 770.683 402.188 705.505 475.301C640.328 548.413 544.937 944.653 348.041 962.819C128.987 983.031 47.0904 741.97 -27.3941 883.834'
          stroke='url(#paint0_linear_31_547)'
          strokeWidth='5'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_31_547'
          x='-41.6074'
          y='0.747253'
          width='1631.83'
          height='993.785'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='16' />
          <feGaussianBlur stdDeviation='6' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_31_547'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_31_547'
            result='shape'
          />
        </filter>
        <linearGradient
          id='paint0_linear_31_547'
          x1='300.75'
          y1='1363.43'
          x2='1625.31'
          y2='-273.828'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0.214906' stopColor='#FF5C00' />
          <stop offset='0.518018' stopColor='#FF7537' />
          <stop offset='0.9446' stopColor='#FF9255' />
        </linearGradient>
      </defs>
    </svg>
  );
};

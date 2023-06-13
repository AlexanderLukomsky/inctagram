'use client';

import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const CaptchaIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path
      d="m26.44 24.907-5.084-4.576c-1.017 1.017-2.542 3.05-6.61 3.05-4.068 0-5.593-2.034-7.119-3.559l3.56-4.068H0v12.204l3.05-3.051c1.526 1.525 6 5.593 11.696 5.593 5.695 0 10-3.898 11.695-5.593z"
      fill="#B5B6B5"
    />
    <path
      d="m14.237 12.703-3.559-4.067c-3.56 2.034-4.237 5.593-4.068 7.118H0c0-1.017.098-4.313 1.017-6.61 1.017-2.542 3.22-4.237 4.576-5.085L2.543.5h11.694v12.203z"
      fill="#4D8DF4"
    />
    <path
      d="m18.305 15.246 3.56-3.56C19.83 8.127 15.931 7.62 14.236 7.62V.5c1.526 0 5.594.508 7.627 2.034 1.898 1.423 3.39 3.05 4.068 4.068l3.56-3.051v11.695H18.304z"
      fill="#1B3CAC"
    />
    <path
      d="m18.305 15.246 3.56-3.56C19.83 8.127 15.931 7.62 14.236 7.62V.5c1.526 0 5.594.508 7.627 2.034 1.898 1.423 3.39 3.05 4.068 4.068l3.56-3.051v11.695H18.304z"
      stroke="#000"
      strokeWidth=".2"
      fill="none"
    />
  </SvgIcon>
);

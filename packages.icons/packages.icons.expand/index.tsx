'use client';

import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const ExpandIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M20 5a1 1 0 0 0-1-1h-5a1 1 0 1 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219L18 7.42V10a1 1 0 0 0 2 0V5zM10.71 13.29a1.002 1.002 0 0 0-1.42 0L6 16.57V14a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2H7.42l3.29-3.29a1.002 1.002 0 0 0 0-1.42z" />
  </SvgIcon>
);

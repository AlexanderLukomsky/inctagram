'use client';

import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const CloseIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="m13.41 12 4.3-4.29a1.004 1.004 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1.004 1.004 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l4.29-4.3 4.29 4.3a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L13.41 12z" />
  </SvgIcon>
);

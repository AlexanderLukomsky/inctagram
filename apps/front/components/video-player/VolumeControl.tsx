import { Box, IconButton, Stack } from '@mui/material';
import { FC, useRef, useState } from 'react';
import { VolumeOff } from '@mui/icons-material';
import { SoundOnIcon } from './Icons';
import { Range } from './Range';

type VolumeControlProps = {
  muted: boolean;
  volume: number;
  onChange: (event: Event, value: number) => void;
  onToggleMute: () => void;
};

export const VolumeControl: FC<VolumeControlProps> = ({
  muted,
  volume,
  onChange,
  onToggleMute,
}) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const [isShow, setIsShow] = useState(false);

  return (
    <Box
      sx={{ position: 'relative', maxWidth: 'max-content', ml: 'auto' }}
      onMouseEnter={() => {
        setIsShow(true);
      }}
      onMouseLeave={() => {
        setIsShow(false);
      }}
    >
      <IconButton onClick={onToggleMute} sx={{ width: '24px', height: '24px', p: 0 }}>
        {!muted && <SoundOnIcon />}
        {muted && <VolumeOff style={{ color: 'white' }} />}
      </IconButton>

      {isShow && (
        <Box
          onMouseOver={() => {
            setIsShow(true);
          }}
          sx={{
            position: 'absolute',
            top: '-190px',
            left: '50%',
            transform: 'translateX(-50%)',
            height: '190px',
            width: '36px',
            bgcolor: 'transparent',
            borderRadius: '8px',
          }}
        >
          <Stack
            alignItems="center"
            ref={sliderRef}
            sx={{
              position: 'absolute',
              top: '0',
              p: '16px 0',
              left: '50%',
              transform: 'translateX(-50%)',
              height: '182px',
              width: '36px',
              bgcolor: 'rgba(16, 16, 16, 0.40);',
              borderRadius: '8px',
            }}
          >
            <Range
              orientation="vertical"
              min={0}
              max={1}
              value={volume}
              step={0.01}
              onChange={onChange}
            />
          </Stack>
        </Box>
      )}
    </Box>
  );
};

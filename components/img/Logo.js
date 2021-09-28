import Image from 'next/image';
import React from 'react';
import { Link } from '@mui/material';

export function Logo() {
  return (
    <Link href='/' style={{ position: 'relative', left: '5%' }}>
      <Image
        src='/image/logo.jpeg'
        width='82 px'
        height='74px'
        alt='Logo Lc Nutrição'
      />
    </Link>
  );
}

import Image from 'next/image';
import React from 'react';

export function Logo() {
  return (
    <Image
      src='/image/logo.jpeg'
      width='82 px'
      height='74px'
      alt='Logo Lc Nutrição'
    />
  );
}

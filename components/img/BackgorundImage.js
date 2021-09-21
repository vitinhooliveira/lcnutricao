import Image from 'next/image';
import React from 'react';

export function BackgroundImage() {
  return (
    <div style={{ position: 'relative', top: '-5px' }}>
      <Image
        className='backgroundimg'
        src='/image/background.webp'
        width='3840w'
        height='2048w'
        alt='Logo Lc Nutrição'
      />
    </div>
  );
}

'use client';
import React, { ReactNode } from 'react';
import { ReactLenis } from 'lenis/react';

const ClientConfigration = ({ children }: { children: ReactNode }) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
};

export default ClientConfigration;

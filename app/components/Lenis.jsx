'use client';

import { useEffect } from 'react';
import { getLenis } from '../lib/Lenis';

export default function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = getLenis();
    if (!lenis) return;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

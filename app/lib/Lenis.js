// lib/lenis.ts
import Lenis from 'lenis';

let lenis = null;

export const getLenis = () => {
  if (typeof window === 'undefined') return null;

  if (!lenis) {
    lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: false,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });
  }

  return lenis;
};

export const startLenis = () => {
  getLenis()?.start();
};

export const stopLenis = () => {
  getLenis()?.stop();
};

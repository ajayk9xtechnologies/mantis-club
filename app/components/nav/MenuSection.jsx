'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MenuSection({ onClose }) {
  const menuRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    // Overlay animation
    tl.fromTo(
      menuRef.current,
      { y: '-100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 0.6, ease: 'power3.out' }
    );

    // Staggered menu items
    tl.from(
      itemsRef.current,
      {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power3.out',
      },
      '-=0.3'
    );

    return () => tl.kill();
  }, []);

  const handleClose = () => {
    gsap.to(menuRef.current, {
      y: '-100%',
      opacity: 0,
      duration: 0.5,
      ease: 'power3.in',
      onComplete: onClose,
    });
  };

  const menuItems = ['Home', 'About', 'Work', 'Contact'];

  return (
    <section
      ref={menuRef}
      className="fixed inset-0 z-50 bg-[#f8db98] flex items-center justify-center"
    >
      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-6 right-6 text-white text-2xl"
      >
        ✕
      </button>

      {/* Menu */}
      <nav>
        <ul className="flex flex-col gap-8 text-center">
          {menuItems.map((item, i) => (
            <li
              key={item}
              ref={(el) => (itemsRef.current[i] = el)}
              className="text-white text-5xl font-medium cursor-pointer hover:opacity-70"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

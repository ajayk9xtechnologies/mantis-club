"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MenuSection({ isOpen, onClose }) {
  const menuRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    if (!menuRef.current) return;

    if (isOpen) {
      gsap.set(menuRef.current, { y: "-100%" });

      gsap
        .timeline()
        .to(menuRef.current, {
          y: "0%",
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          itemsRef.current,
          {
            y: 60,
            opacity: 0,
            stagger: 0.12,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        );
    } else {
      gsap.to(menuRef.current, {
        y: "-100%",
        duration: 0.6,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  return (
    <section
      ref={menuRef}
      className="fixed inset-0 z-50 bg-[#f8db98] text-[#000]"
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
    >
      {/* TOP BAR */}
      <div className="flex justify-between items-center px-10 pt-8">
        <span className="tracking-widest text-sm">MANTIS CLUB</span>
        <button
          onClick={onClose}
          className="w-8 h-8 border border-[#d6d2c4] flex items-center justify-center"
        >
          ✕
        </button>
      </div>

      {/* CONTENT */}
      <div className="px-10 mt-24 grid grid-cols-1 lg:grid-cols-2 gap-32">
        <div>
          <p className="text-sm mb-6 opacity-70">Explore</p>
          <ul className="space-y-6">
            <li className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide cursor-pointer hover:opacity-60 transition">
              Contact
            </li>
            <li className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide cursor-pointer hover:opacity-60 transition">
              Gallery 
            </li>
          </ul>
        </div>

        <div className="self-end">
          <p className="text-sm mb-6 opacity-70">Community</p>
          <ul className="space-y-6">
            {["Events", "Merch"].map((item, i) => (
              <li
                key={item}
                ref={(el) => (itemsRef.current[i + 2] = el)}
                className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide cursor-pointer hover:opacity-60 transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

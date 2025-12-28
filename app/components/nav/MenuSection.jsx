"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/Mantis_logo-removebg-preview-300x150.png";

export default function MenuSection({ isOpen, onClose, lenisRef }) {
  const menuRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    if (!menuRef.current) return;

    const ctx = gsap.context(() => {
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
    }, menuRef);

    return () => ctx.revert();
  }, [isOpen]);

  const handleHomeClick = (e) => {
    e.preventDefault();
    onClose();

    if (lenisRef?.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  };

  return (
    <section
      ref={menuRef}
      className="fixed inset-0 z-50 bg-[#000] text-[#f8db98]"
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
    >
       <div className="cusror flex justify-between items-center px-10">
        <Link href="/" onClick={handleHomeClick} className="mt-4 bg-black rounded-xl">
          <Image src={logo} alt="logo" width={180} />
        </Link>

        <button onClick={onClose} className="cusror w-8 h-8 border border-[#d6d2c4] flex items-center justify-center">
          ✕
        </button>
      </div>
       <div className="px-10 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-32">
        <div>
          <p className="paragraph_two mb-6 opacity-70">Explore</p>
          <ul className="space-y-6 font-bold">
            {["Home", "Contact", "Gallery", "Book Now"].map((item, i) => (
              <li key={item} onClick={item === "Home" ? handleHomeClick : onClose}
                className="text-5xl md:text-6xl lg:text-8xl tracking-wide cursor-pointer hover:opacity-60 transition" >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

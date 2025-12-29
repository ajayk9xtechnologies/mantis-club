"use client";
import Image from "next/image";
import logo from "../../assets/images/Mantis_logo-removebg-preview-300x150.png";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Lenis from "lenis";
import MenuSection from "./MenuSection";
export default function Header() {
  const lenisRef = useRef(null);

  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.stop();
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <>
      <header className="fixed w-full z-50 backdrop-blur-xs bg-black/10">
        <div className="w-full p-4">
          <div className="relative h-20 flex items-center justify-between">
            <Link href="/gallery" className="cusror">
              <Image src={logo} alt="logo" width={180} />
            </Link>
            <div className="w-10" />
             <div className="absolute left-1/2 -translate-x-1/2 mt-10"></div>

            {/* Hamburger */}
            <button className="cursor" onClick={() => setToggle(true)}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-[#f8db98]"
              >
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ALWAYS MOUNTED */}
      <MenuSection isOpen={toggle} onClose={() => setToggle(false)} />
    </>
  );
}

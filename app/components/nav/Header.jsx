"use client";
import Image from "next/image";
import logo from "../../assets/images/Mantis_logo-removebg-preview-300x150.png";
import { useState } from "react";
import MenuSection from "./MenuSection";
 export default function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header className="relative z-40">
        <div className="w-full px-1 md:px-5 xl:px-12">
          <div className="relative h-20 flex items-center justify-between">

            <div className="w-10" />

            {/* Center logo */}
            <div className="absolute left-1/2 -translate-x-1/2 mt-10">
              <Image src={logo} alt="logo" width={180} />
            </div>

            {/* Hamburger */}
            <button onClick={() => setToggle(true)}>
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

      {toggle && <MenuSection onClose={() => setToggle(false)} />}
    </>
  );
}
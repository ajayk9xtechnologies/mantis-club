"use client";
import Image from "next/image";
import logo from "../../assets/images/Mantis_logo-removebg-preview-300x150.png";
import { useState } from "react";
import MenuSection from "./MenuSection";
import SafeLink from "../SafeLink";
export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header className="fixed w-full z-50 backdrop-blur-xs bg-black/10">
        <div className="w-full px-4 py-2">
          <div className="relative h-20 flex items-center justify-between">
            <SafeLink
              href="#mantis"
              className="cursor"
              onNavigate={() => setToggle(false)}
            >
              <Image src={logo} alt="Mantis logo" width={180} />
            </SafeLink>
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

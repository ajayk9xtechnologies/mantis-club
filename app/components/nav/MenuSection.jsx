"use client";

import Image from "next/image";
 import logo from "../../assets/images/Mantis_logo-removebg-preview-300x150.png";
import SafeLink from "../SafeLink";

export default function MenuSection({ isOpen, onClose }) {
  return (
    <section
      className={`fixed inset-0 z-50 bg-black text-[#f8db98]
        transition-transform duration-500 ease-out
        ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
    >
      {/* HEADER */}
      <div className="flex justify-between items-center px-10 py-6">
        <SafeLink href="/" onNavigate={onClose}>
          <Image src={logo} alt="Mantis logo" width={180} />
        </SafeLink>
        <button
          onClick={onClose}
          className="w-10 h-10 border border-[#d6d2c4] flex items-center justify-center text-xl"
        >
          ✕
        </button>
      </div>

      {/* MENU */}
      <div className="px-10 mt-20">
        <p className="uppercase text-sm tracking-widest opacity-60 mb-8">
          Explore
        </p>

        <ul className="space-y-6 font-bold">
          {[
            { label: "Home", href: "/" },
            { label: "Contact", href: "/contact" },
            { label: "Gallery", href: "/gallery" },
            { label: "Book Now", href: "/contact" },
          ].map((item) => (
            <li
              key={item.label}
              className="text-5xl md:text-6xl tracking-wide hover:opacity-60 transition"
            >
              <SafeLink href={item.href} onNavigate={onClose}>
                {item.label}
              </SafeLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
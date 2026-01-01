"use client";

import Image from "next/image";
import { mantisLogo } from "../../common";
import SafeLink from "../SafeLink";

export default function MenuSection({ isOpen, onClose }) {
  return (
    <section
      className={`fixed inset-0 z-50 text-[#f8db98]
      transition-transform duration-500 ease-out
      ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
    >

      <div className="absolute inset-0 bg-black">
        {/* subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-black opacity-90" />
        {/* soft noise feel */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      {/* CONTENT */}
      <div className="relative h-full flex flex-col">
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 lg:px-12 py-5">
          <SafeLink href="/" onNavigate={onClose}>
            <Image src={mantisLogo} alt="Mantis logo" width={180} />
          </SafeLink>

          <button
            onClick={onClose}
            className="w-11 h-11 border border-[#d6d2c4]/60
            flex items-center justify-center text-xl
            hover:bg-[#f8db98] hover:text-black
            transition-all duration-300"
          >
            ✕
          </button>
        </div>

        {/* MENU */}
        <div className="flex-1 flex items-center px-8 lg:px-20">
          <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

            {/* LEFT COLUMN: EXPLORE */}
            <div>
              <p className="uppercase text-xs tracking-[0.3em] opacity-60 mb-8 lg:mb-10">
                Explore
              </p>

              <ul className="space-y-4 lg:space-y-6 font-bold">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about-us" },
                  { label: "Gallery", href: "/gallery" },
                  { label: "Contact", href: "/contact" },
                  { label: "Book Now", href: "/contact" }, // Assuming Book Now goes to contact for now
                ].map((item) => (
                  <li
                    key={item.label}
                    className="text-4xl md:text-5xl lg:text-6xl tracking-wide hover:opacity-60 transition"
                  >
                    <SafeLink href={item.href} onNavigate={onClose}>
                      {item.label}
                    </SafeLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT COLUMN: COMMUNITY */}
            <div>
              <p className="uppercase text-xs tracking-[0.3em] opacity-60 mb-8 lg:mb-10">
                Community
              </p>

              <ul className="space-y-4 lg:space-y-6 font-bold">
                {[
                  { label: "Blogs", href: "/blogs" },
                  { label: "Terms", href: "/terms" }, // Placeholder link
                  { label: "Policy", href: "/privacy-policy" }, // Placeholder link
                ].map((item) => (
                  <li
                    key={item.label}
                    className="text-4xl md:text-5xl lg:text-6xl tracking-wide hover:opacity-60 transition"
                  >
                    <SafeLink href={item.href} onNavigate={onClose}>
                      {item.label}
                    </SafeLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="px-8 lg:px-20 pb-6 text-xs opacity-40 tracking-widest">
          © MANTIS DUBAI
        </div>
      </div>
    </section>
  );
}

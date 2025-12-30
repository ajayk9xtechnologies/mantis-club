'use client'
import Image from "next/image";
import google from "../../assets/images/google.webp"
import logo from "../../assets/images/Mantis_logo-removebg-preview-300x150.png";
import {
  Instagram,
  Facebook,
  Music2,
  MessageCircle
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#000] text-white px-6 md:px-16 py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20 items-start">

        {/* LEFT : BRAND */}
        <div className="space-y-10">
          <Image
            src={logo}
            alt="Mantis DXB"
            width={200}
            height={80}
            className="object-contain"
          />

          <h3 className="font-bold leading-tight">
            LET’S PARTY <br /> TOGETHER
          </h3>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#f8db98] text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            LET’S TALK
          </a>
        </div>

        {/* CENTER : NAV */}
        <div className="space-y-4 text-gray-300">
          <h4 className="font-semibold text-white tracking-wide">
            NAVIGATION
          </h4>
          <Link href="#home" className="block hover:text-[#f8db98]">Home</Link>
          <Link href="/gallery" className="block hover:text-[#f8db98]">Gallery</Link>
          <Link href="/contact" className="block hover:text-[#f8db98]">Contact</Link>
        </div>
        {/* RIGHT : SOCIAL + GOOGLE */}
        <div className="space-y-6">
          <h4 className="font-semibold text-white tracking-wide">
            FOLLOW US
          </h4>

          <div className="flex items-center gap-4">
            <a className="social"><Instagram /></a>
            <a className="social"><Facebook /></a>
            <a className="social"><Music2 /></a>
            <a className="social"><MessageCircle /></a>
          </div>

          {/* GOOGLE REVIEWS */}
          <a
            href="https://www.google.com/search?q=mantis+dxb"
            target="_blank"
            className="inline-block mt-4"
          >
            <Image
              src={google}
              alt="Google Reviews"
              width={140}
              height={20}
              className="rounded-xl"
            />
          </a>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400 text-sm">
        Copyright © 2025 Mantis DXB
      </div>

      {/* ICON STYLE */}
      <style jsx>{`
        .social {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .social:hover {
          border-color: #f8db98;
          color: #f8db98;
        }
      `}</style>
    </footer>
  );
}

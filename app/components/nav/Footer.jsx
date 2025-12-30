'use client'
import Image from "next/image";
import google from "../../assets/images/google.webp"
import logo from "../../assets/images/Mantis_logo-removebg-preview-300x150.png";
import SafeLink from "../SafeLink";
import {
  Instagram,
  Facebook,
  Music2,
  MessageCircle
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#060606] text-white px-6 md:px-16 py-24">
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
            LET S PARTY <br /> TOGETHER
          </h3>
          <SafeLink
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#f8db98] text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            LET S TALK
          </SafeLink>
        </div>

        {/* CENTER : NAV */}
        <div className="space-y-4 text-gray-300">
          <h4 className="font-semibold text-white tracking-wide">
            NAVIGATION
          </h4>
          <SafeLink href="#mantis" className="block hover:text-[#f8db98]">Home</SafeLink>
          <SafeLink href="/gallery" className="block hover:text-[#f8db98]">Gallery</SafeLink>
          <SafeLink href="/contact" className="block hover:text-[#f8db98]">Contact</SafeLink>
        </div>

        {/* RIGHT : SOCIAL + GOOGLE */}
        <div className="space-y-6">
          <h4 className="font-semibold text-white tracking-wide">
            FOLLOW US
          </h4>

          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/mantisdubai" target="_blank" rel="noopener noreferrer" className="social"><Instagram /></a>
            <a href="https://www.facebook.com/MantisDubai/" target="_blank" rel="noopener noreferrer" className="social"><Facebook /></a>
            <a href="https://www.tiktok.com/en/" target="_blank" rel="noopener noreferrer" className="social"><Music2 /></a>
            <a href="tel:+971565607007" target="_blank" rel="noopener noreferrer" className="social"><MessageCircle /></a>
          </div>

          {/* GOOGLE REVIEWS */}

          <a href="https://www.google.com/search?sca_esv=76c4bff7d1a872fc&sxsrf=AE3TifMKVLhG3m5sCM-GuaGLtxFuX5Fo4A:1767086986263&q=mantis+club+dubai&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E3Rzhu45nDQN2NbgXW8aGinxA7JyMXtbtksdYStt2YN_aJvm_ZsD-B67j5HGHo6flDEijJOcQzImc0JbZOAW2CntoRqp&sa=X&sqi=2&ved=2ahUKEwiL1-mAgOWRAxWnlP0HHQlUAUIQrrQLegQINRAA&biw=1916&bih=898&dpr=1"
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
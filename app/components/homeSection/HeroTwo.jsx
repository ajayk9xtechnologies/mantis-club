"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MantisHeroVideo() {
  const heroRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const videoId = "YJkPU_xqHKg";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  useEffect(() => {
    const t = setTimeout(() => setVideoLoaded(true), 500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=100%",
            scrub: 1,
            pin: true,
          },
        })
        .fromTo(
          containerRef.current,
          { scale: 1 },
          { scale: 0.85, ease: "power2.inOut" }
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <div ref={containerRef} className="relative w-full h-full">
        {/* BACKGROUND VIDEO (FULL SCREEN) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={thumbnailUrl}
            alt="Hero video thumbnail"
            fill
            priority
            sizes="100vw"
            unoptimized
            className={`object-cover transition-opacity duration-700 ${
              videoLoaded ? "opacity-0" : "opacity-100"
            }`}
          />

          {videoLoaded && (
            <iframe
              className="absolute top-1/2 left-1/2 min-w-[120%] min-h-[120%] w-auto h-auto -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0&playsinline=1&loop=1&playlist=${videoId}&modestbranding=1`}
              title="Hero Video"
              frameBorder="0"
              allow="autoplay; fullscreen"
            />
          )}
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />

        {/* TEXT CONTENT */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="relative" ref={textRef}>
            {/* SMALL "THE" TEXT */}
            <div className="absolute -top-8 left-2 sm:-top-10 md:-top-14 lg:-top-16">
              <p className="text-white/90 text-[10px] sm:text-xs md:text-sm lg:text-base tracking-[0.4em] uppercase font-light">
                The
              </p>
            </div>

            {/* MAIN "MANTIS" TEXT WITH VIDEO CUTOUT */}
            <div className="relative">
              {/* Background layer - creates the cutout effect */}
              <div className="absolute inset-0 -m-8">
                <div
                  className="w-full h-full"
                  style={{
                    position: "absolute",
                    inset: "-2rem",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={thumbnailUrl}
                    alt="Text background"
                    fill
                    sizes="100vw"
                    unoptimized
                    className={`object-cover transition-opacity duration-700 ${
                      videoLoaded ? "opacity-0" : "opacity-100"
                    }`}
                  />

                  {videoLoaded && (
                    <iframe
                      className="absolute top-1/2 left-1/2 min-w-[200%] min-h-[200%] w-auto h-auto -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0&playsinline=1&loop=1&playlist=${videoId}&modestbranding=1`}
                      title="Text Video"
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                    />
                  )}
                </div>
              </div>

              {/* Text mask */}
              <h1
                className="relative text-[22vw] sm:text-[20vw] md:text-[18vw] lg:text-[15vw] font-black leading-none tracking-tighter select-none"
                style={{
                  mixBlendMode: "screen",
                  color: "#ffffff",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontWeight: "900",
                }}
              >
                MANTIS
              </h1>
            </div>

            {/* SMALL "CLUB" TEXT */}
            <div className="absolute -bottom-8 right-2 sm:-bottom-10 md:-bottom-14 lg:-bottom-16">
              <p className="text-white/90 text-[10px] sm:text-xs md:text-sm lg:text-base tracking-[0.4em] uppercase font-light">
                Club
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}